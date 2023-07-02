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
const SetIfNotCached = (props /*: Props */) => {
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
  if (newItems[props.dkey] === undefined) {
    newItems[props.dkey] = props.dvalue;
    db.set(props.sid, newItems);
    return `{ "status": "success", "message": "[SetIfNotCached] ${
      props.dkey
    } set to ${newItems[props.dkey]}" }`;
  }
  return `{ "status": "success", "message": "[SetIfNotCached] ${
    props.dkey
  } unchanged (${newItems[props.dkey]})" }`;
};

export default SetIfNotCached;
