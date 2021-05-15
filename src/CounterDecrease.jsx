import React from "react";
import "./style.css";
import { useDispatch } from "react-redux";

export default function CounterDecrease(props) {
  // redux hooks
  const dispatch = useDispatch();
  const onDecrease = () => {
    dispatch({ type: "DECREASE_COUNTER" });
  };
  return (
    <div className={"counter"}>
      <button onClick={onDecrease}>{"Decrease"}</button>
    </div>
  );
}
