// @flow
import conf from "./config.js";
import { h, render, createContext } from "preact";
import { useReducer } from "preact/hooks";
import htm from "htm";
import produce from "immer";
import Router from "preact-router";

const html = htm.bind(h);

// A context for the state global management
const AppContext = createContext([{}, () => {}]);

const reducer = (state, action) =>
  // https://www.pika.dev/npm/@vve/immer
  produce(state, (draft) => {
    // let count /*: number */;
    // if (action.type === "add") {
    //   count = state.count || action.payload;
    //   count++;
    //   draft.count = count;
    // }
    // if (action.type === "subtract") {
    //   count = state.count || action.payload;
    //   count--;
    //   draft.count = count;
    // }
    // if (action.type === "reset") {
    //   draft.count = action.payload.count;
    // }
  });

/*::
type Props = {
	children: Array<function>;
};
*/
const AppProvider /*: function */ = (props /*: Props */) => {
  const [state, dispatch] = useReducer(reducer, {});

  return html`
      <${AppContext.Provider} dvalue=${[state, dispatch]}>
				${props.children}
      </${AppContext.Provider}>
  `;
};

export { AppContext, AppProvider };
