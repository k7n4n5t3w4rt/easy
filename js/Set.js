// @flow
import { h, render } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import JSONdb from "simple-json-db";
import htm from "htm";

const html = htm.bind(h);

/*::
type Props = {
  sid: string,
  dkey: string,
  dvalue: string,
};
*/
const Set = (props /*: Props */) => {
  // const [count /*: number */, setCount] = useState(props.count);

  // If we don't have the necessary params, return
  if (props.sid === "" || props.dkey === "" || props.dvalue === "") {
    return html`{ status: "fail", message: "Missing parameters" }`;
  }
  const newItems = {};
  const db = new JSONdb("database.json");
  if (db.has(props.sid)) {
    for (const [dkey, dvalue] /*: [any, any] */ of Object.entries(
      db.get(props.sid),
    )) {
      newItems[dkey] = dvalue;
    }
  }
  newItems[props.dkey] = props.dvalue;
  db.set(props.sid, newItems);

  return `{ "status": "success", "message": "Set ${props.dkey} to ${props.dvalue}" }`;
};

export default Set;
