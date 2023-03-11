import React, { createContext, useReducer, useState } from "react";
import Two from "./Two";

export const MyContext = createContext();
function reducer(state, action) {
  switch (action.type) {
    case setColor:
      return { ...state, color: "black" };
    case setActive:
      return { ...state, active: !state.active };
    default:
      return state;
  }
}
const One = () => {
  // const [count, setCount] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    color: "white",
    avtive: false,
  });
  return (
    <MyContext.Provider value={count}>
      <div>
        <Two />
      </div>
    </MyContext.Provider>
  );
};

export default One;
