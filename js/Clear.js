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
const Clear = (props /*: Props */) /*: string */ => {
  // const [count /*: number */, setCount] = useState(props.count);

  // If we don't have the necessary params, return
  if (props.sid === "") {
    const message = JSON.stringify({
      status: "fail",
      message: "[Clear] The session ID parameter is missing",
    });
    return message;
  }

  const db = new JSONdb("database.json");
  let message = "{}";
  if (db.delete(props.sid)) {
    message = JSON.stringify({
      status: "success",
      message: "[Clear] The session ID data was deleted",
    });
    return message;
  } else {
    message = JSON.stringify({
      status: "fail",
      message: "[Clear] The session ID doesn't exist",
    });
    return message;
  }
};

export default Clear;
