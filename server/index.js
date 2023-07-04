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
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592000, // 30 days
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers":
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    /** add other headers as per requirement */
  };

  if (req.method === "OPTIONS") {
    // $FlowFixMe
    res.writeHead(204, headers);
    res.end();
  } else {
    req.url = req.url.replace(/\/$/, "");
    // NOTE: The trailing "/" doesn't seem to matter
    // to `preact-router` when `/js/App.js` is being
    // rendered server-side
    const [urlPath, queryString] = req.url.split(
      "?",
    );

    // The URL function
    const searchParams /*: URLSearchParams */ = new URL(
      "http://whocares.com" + req.url,
    ).searchParams;

    const output = render(App({ urlPath, searchParams }), {}, { pretty: true });

    // $FlowFixMe
    res.writeHead(200, headers);
    // Fix up quotes because this is JSON, eg.
    // { status: "success" } not { status: &quot;success&quot; }
    const re = /&quot;/g;
    res.end(output.replace(re, '"'));
  }
};

const server = http.createServer(requestHandler);

server.listen(conf.PORT, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`server is listening on ${conf.PORT}`);
});
