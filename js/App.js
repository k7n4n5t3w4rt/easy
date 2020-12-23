// @flow
import { h } from "preact";
import Dyad from "./Dyad.js";
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
  // If we don't have the necessary params, return
  if (
    props.searchParams.get("sessionId") === null ||
    props.searchParams.get("position") === null ||
    typeof parseInt(props.searchParams.get("position")) !== "number"
  ) {
    return "VOID";
  }

  const sessionId /*: string */ = props.searchParams.get("sessionId") || "";
  const position /*: number */ =
    parseInt(props.searchParams.get("position")) || 0;

  return html`
    <${AppProvider} >
      <${Router} url="${props.urlPath}">
        <${Dyad} path="/dyad" sessionId="${sessionId}" position="${position}"/>
      </${Router}>
    </${AppProvider} >
  `;
};

export default App;
