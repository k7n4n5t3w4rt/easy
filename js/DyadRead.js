// @flow
import { h, render } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import JSONdb from "simple-json-db";
import htm from "htm";

const html = htm.bind(h);

/*::
type Props = {
  sessionId: string,
  position: number,
};
*/
const DyadSave = (props /*: Props */) => {
  // const [count /*: number */, setCount] = useState(props.count);

  // If we don't have the necessary params, return
  if (props.sessionId === "") {
    return html`{ status: "fail" }`;
  }

  const db = new JSONdb("database.json");
  if (db.has(props.sessionId)) {
    return `{"${props.sessionId}":[${db.get(props.sessionId)}]}`;
  } else {
    return `{}`;
  }
};

export default DyadSave;
