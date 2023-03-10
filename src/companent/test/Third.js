import React, { useContext } from "react";
import { MyContext } from "./One";

const Third = () => {
  const active = useContext(MyContext);
  return <div>{
    active?'salom':'ssss'
    }</div>;
};

export default Third;
