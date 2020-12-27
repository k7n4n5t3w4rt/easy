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

  const output = render(App({ urlPath, searchParams }), {}, { pretty: true });

  res.writeHead(200, { "Content-Type": "application/json" });
  // Fix up quotes because this is JSON, eg.
  // { status: "success" } not { status: &quot;success&quot; }
  const re = /&quot;/g;
  res.end(output.replace(re, '"'));
};

const server = http.createServer(requestHandler);

server.listen(conf.PORT, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`server is listening on ${conf.PORT}`);
});
