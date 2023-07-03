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
};
*/
const Get = (props /*: Props */) => {
  // const [count /*: number */, setCount] = useState(props.count);

  // If we don't have the necessary params, return
  if (props.sid === "" || props.dkey === "") {
    const message = JSON.stringify({
      status: "fail",
      message: "[Set] Missing parameters",
    });
    return message;
  }

  const db = new JSONdb("database.json");
  if (db.has(props.sid)) {
    return JSON.stringify({ [props.dkey]: db.get(props.sid)[props.dkey] });
  } else {
    return `{}`;
  }
};

export default Get;
