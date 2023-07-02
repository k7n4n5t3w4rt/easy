// @flow
import { h } from "preact";
import Set from "./Set.js";
import Get from "./Get.js";
import Router from "preact-router";
import htm from "htm";
import { AppProvider } from "./AppContext.js";
const html = htm.bind(h);

/*::
type Props = {
  urlPath: string,
  searchParams: URLSearchParams
};
*/
const App /*: function */ = (props /*: Props */) => {
  const sid /*: string */ = props.searchParams.get("sid") || "";
  const datakey /*: string */ = props.searchParams.get("datakey") || "";
  const datavalue /*: string */ = props.searchParams.get("datavalue") || "";

  return html`
    <${AppProvider} >
      <${Router} url="${props.urlPath}">
        <${Set} path="/set" sid="${sid}" datakey="${datakey}" datavalue="${datavalue}"/>
        <${Get} path="/get" sid="${sid}"/>
      </${Router}>
    </${AppProvider} >
  `;
};

export default App;
