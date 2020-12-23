// @flow
import { h } from "../web_modules/preact.js";
import Dyad from "./Dyad.js";
import Router from "../web_modules/preact-router.js";
import htm from "../web_modules/htm.js";
const html = htm.bind(h);

/*::
type Props = {
  urlPath: string,
  searchParams: URLSearchParams
};
*/
const App /*: function */ = (props /*: Props */) => {
  return html`
      <${Router} url="${props.urlPath}">
        <${Dyad} path="/dyad" searchParams="${props.searchParams}"/>
      </${Router}>
  `;
};

export default App;
