// @flow
import { h, render } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import JSONdb from "simple-json-db";
import htm from "htm";

const html = htm.bind(h);

/*::
type Props = {
  sessionId: string,
  uniqueId: string,
  position: string,
};
*/
const DyadSave = (props /*: Props */) => {
  // const [count /*: number */, setCount] = useState(props.count);

  // If we don't have the necessary params, return
  if (
    props.sessionId === "" ||
    props.uniqueId === "" ||
    props.position === "" ||
    typeof parseInt(props.position) !== "number"
  ) {
    return html`{ status: "fail" }`;
  }

  const newItems = {};

  const db = new JSONdb("database.json");
  if (db.has(props.sessionId)) {
    for (const [uniqueId, coordinates] /*: [any, any] */ of Object.entries(
      db.get(props.sessionId),
    )) {
      newItems[uniqueId] = { x: coordinates.x };
    }
  }
  newItems[props.uniqueId] = { x: props.position };
  db.set(props.sessionId, newItems);

  // const positionString = newItems.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue.position + ",",
  //   "",
  // );
  return `{ "status": "success" }`;
};

export default DyadSave;
