// @flow
import { h, render } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import JSONdb from "simple-json-db";
import htm from "htm";

const html = htm.bind(h);

/*::
type Props = {
  sid: string,
  dvalue: number,
};
*/
const Get = (props /*: Props */) => {
  // const [count /*: number */, setCount] = useState(props.count);

  // If we don't have the necessary params, return
  if (props.sid === "") {
    return html`{ status: "fail" }`;
  }

  const db = new JSONdb("database.json");
  if (db.has(props.sid)) {
    return `{"${props.sid}":${JSON.stringify(db.get(props.sid))}}`;
  } else {
    return `{}`;
  }
};

export default Get;
