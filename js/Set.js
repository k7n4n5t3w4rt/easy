// @flow
import { h, render } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import JSONdb from "simple-json-db";
import htm from "htm";

const html = htm.bind(h);

/*::
type Props = {
  sid: string,
  datakey: string,
  datavalue: string,
};
*/
const Set = (props /*: Props */) => {
  // const [count /*: number */, setCount] = useState(props.count);

  // If we don't have the necessary params, return
  if (props.sid === "" || props.datakey === "" || props.datavalue === "") {
    return html`{ status: "fail", message: "Missing parameters" }`;
  }
  const newItems = {};
  const db = new JSONdb("database.json");
  if (db.has(props.sid)) {
    for (const [datakey, datavalue] /*: [any, any] */ of Object.entries(
      db.get(props.sid),
    )) {
      newItems[datakey] = datavalue;
    }
  }
  newItems[props.datakey] = props.datavalue;
  db.set(props.sid, newItems);

  return `{ "status": "success", "message": "Set ${props.datakey} to ${props.datavalue}" }`;
};

export default Set;
