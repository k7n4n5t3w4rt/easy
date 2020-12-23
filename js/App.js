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
  return html`
    <${AppProvider} >
      <${Router} url="${props.urlPath}">
        <${Dyad} path="/dyad" dyad="${props.searchParams.get(
    "dyad",
  )}" position="${props.searchParams.get("position")}"/>
      </${Router}>
    </${AppProvider} >
  `;
};

export default App;
