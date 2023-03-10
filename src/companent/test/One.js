import React, { createContext, useState } from "react";
import Two from "./Two";

export const MyContext = createContext();

const One = () => {
    const [count, setCount] = useState(false)
  return (
    <MyContext.Provider value={count} >
      <div>
        <Two/>
      </div>
    </MyContext.Provider>
  );
};

export default One;
