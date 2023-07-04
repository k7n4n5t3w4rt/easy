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
const Set = (props /*: Props */) /*: string */ => {
  // const [count /*: number */, setCount] = useState(props.count);

  // If we don't have the necessary params, return
  if (props.sid === "" || props.dkey === "" || props.dvalue === "") {
    const message = JSON.stringify({
      status: "fail",
      message: "[Set] Missing parameters",
    });
    return message;
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
  const message = JSON.stringify({
    status: "success",
    message: `[Set] ${props.dkey} set to ${props.dvalue}`,
  });
  return message;
};

export default Set;
