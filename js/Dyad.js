// @flow
import { h, render } from "../web_modules/preact.js";
import {
  useContext,
  useEffect,
  useState,
} from "../web_modules/preact/hooks.js";
import htm from "../web_modules/htm.js";

const html = htm.bind(h);

/*::
type Props = {
  searchParams: URLSearchParams
};
*/
const Dyad = (props /*: Props */) => {
  // const [count /*: number */, setCount] = useState(props.count);

  return html`{}`;
};

export default Dyad;
