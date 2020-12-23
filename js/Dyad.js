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
const Dyad = (props /*: Props */) => {
  // const [count /*: number */, setCount] = useState(props.count);

  const positions = [];

  const db = new JSONdb("database.json");
  if (db.has(props.sessionId)) {
    db.get(props.sessionId).forEach((item /*: number */) /*: void */ => {
      positions.push(item);
    });
  }
  positions.push(props.position);
  db.set(props.sessionId, positions);

  const positionString = positions.reduce(
    (accumulator, currentValue) => accumulator + currentValue + ",",
    "",
  );

  // DOESN'T WORK :(
  // const temp = JSON.parse(
  //   html`{ ${props.sessionId.trim()}: [${positionString}] }`,
  // );
  // const reformatted /*: string */ = JSON.stringify(temp);

  return html`{ ${props.sessionId.trim()}: [${positionString}] }`;
};

export default Dyad;
