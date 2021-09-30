import { useReducer } from "react";

type CounterState = {
  count: number;
};

type ActionUpdate = {
  type: "increment" | "decrement";
  payload: number;
};

type ActionReset = {
  type: "reset";
};
type ActionCounter = ActionUpdate | ActionReset;

const initialState = { count: 0 };

const reducer = (state: CounterState, action: ActionCounter) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>stat: {state.count}</h3>
      <button
        onClick={() => {
          dispatch({ type: "increment", payload: 10 });
        }}
      >
        increment by 10
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", payload: 10 });
        }}
      >
        decrement by 10
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
};
