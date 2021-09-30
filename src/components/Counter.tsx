import { useReducer } from "react";

type CounterState = {
  count: number;
};

type ActionCounter = {
  type: string;
  payload: number;
};
const initialState = { count: 0 };

const reducer = (state: CounterState, action: ActionCounter) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

export const Counter = () => {
  const [state, dipatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>stat: {state.count}</h3>
      <button
        onClick={() => {
          dipatch({ type: "increment", payload: 10 });
        }}
      >
        increment by 10
      </button>
      <button
        onClick={() => {
          dipatch({ type: "decrement", payload: 10 });
        }}
      >
        decrement by 10
      </button>
    </div>
  );
};
