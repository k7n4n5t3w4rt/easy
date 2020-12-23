// @flow
import { h, render } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import JSONdb from "simple-json-db";
import htm from "htm";

const html = htm.bind(h);

/*::
type Props = {
  dyad: string,
  position: string,
};
*/
const Dyad = (props /*: Props */) => {
  // const [count /*: number */, setCount] = useState(props.count);

  const positions = [];

  const db = new JSONdb("database.json");
  if (db.has(props.dyad)) {
    db.get(props.dyad).forEach((item /*: number */) /*: void */ => {
      positions.push(item);
    });
  }
  positions.push(props.position);
  db.set(props.dyad, positions);

  const positionString = positions.reduce(
    (accumulator, currentValue) => accumulator + currentValue + ",",
    "",
  );

  return html`{ position: [${positionString}] }`;
};

export default Dyad;
