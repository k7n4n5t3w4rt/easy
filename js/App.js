// @flow
import { h } from "preact";
import Set from "./Set.js";
import Get from "./Get.js";
import GetAll from "./GetAll.js";
import Clear from "./Clear.js";
import SetIfNotCached from "./SetIfNotCached.js";
import Router from "preact-router";
import htm from "htm";
const html = htm.bind(h);

/*::
type Props = {
  urlPath: string,
  searchParams: URLSearchParams
};
*/
const App /*: function */ = (props /*: Props */) => {
  const sid /*: string */ = props.searchParams.get("sid") || "";
  const dkey /*: string */ = props.searchParams.get("dkey") || "";
  const dvalue /*: string */ = props.searchParams.get("dvalue") || "";

  return html`
      <${Router} url="${props.urlPath}">
        <${Set} path="/set" sid="${sid}" dkey="${dkey}" dvalue="${dvalue}"/>
        <${Clear} path="/clear" sid="${sid}"/>
        <${Get} path="/get" sid="${sid}" dkey="${dkey}"/>
        <${GetAll} path="/getall" sid="${sid}"/>
        <${SetIfNotCached} path="/setifnotcached" sid="${sid}" dkey="${dkey}" dvalue="${dvalue}"/>
      </${Router}>
  `;
};

export default App;
