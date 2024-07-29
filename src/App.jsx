import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment-10":
      return { count: state.count + 10 };
    case "increment-40":
      return { count: state.count + 20 };
    case "decrement-7":
      return { count: state.count - 7 };
    case "decrement-3":
      return { count: state.count - 3 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment-10" })}>+10</button>
      <button onClick={() => dispatch({ type: "increment-40" })}>+20</button>
      <button onClick={() => dispatch({ type: "decrement-7" })}>-7</button>
      <button onClick={() => dispatch({ type: "decrement-3" })}>-3</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default App;
