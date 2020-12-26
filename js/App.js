// @flow
import { h } from "preact";
import DyadSave from "./DyadSave.js";
import DyadRead from "./DyadRead.js";
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
  const sessionId /*: string */ = props.searchParams.get("sessionId") || "";
  const position /*: string */ = props.searchParams.get("position") || "";

  return html`
    <${AppProvider} >
      <${Router} url="${props.urlPath}">
        <${DyadSave} path="/dyad-save" sessionId="${sessionId}" position="${position}"/>
        <${DyadRead} path="/dyad-read" sessionId="${sessionId}"/>
      </${Router}>
    </${AppProvider} >
  `;
};

export default App;
