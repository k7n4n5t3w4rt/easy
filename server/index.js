// @flow
import conf from "./config.js";
import fs from "fs";
import http from "http";
import { h } from "preact";
import htm from "htm";
import render from "preact-render-to-string";
import App from "../js/App.js";
const html = htm.bind(h);

const requestHandler = (req, res) => {
  req.url = req.url.replace(/\/$/, "");
  // NOTE: The trailing "/" doesn't seem to matter
  // to `preact-router` when `/js/App.js` is being
  // rendered server-side
  const [urlPath /*: string */, queryString /*: string */] = req.url.split("?");

  // The URL function
  const searchParams /*: URLSearchParams */ = new URL(
    "http://whocares.com" + req.url,
  ).searchParams;

  const output = renderToString(urlPath, searchParams);

  res.end(output);
};

const renderToString = (
  urlPath /*: string */,
  searchParams /*: URLSearchParams */,
) /*: string */ => {
  const index /*: string */ = fs.readFileSync("./index.txt", "utf8");
  let renderedContent = index;

  // Server-side rendering
  // [1] Swap the placeholder copy with the rendered output
  const reString = "JSON";
  const re = new RegExp(reString, "g");
  renderedContent = index.replace(
    re,
    render(App({ urlPath, searchParams }), {}, { pretty: true }),
  );

  return renderedContent;
};

const server = http.createServer(requestHandler);

server.listen(conf.PORT, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`server is listening on ${conf.PORT}`);
});
