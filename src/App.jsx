import React from "react";
import "./style.css";
// import { createStore, reducer } from './store'; // con este se usa el createStore manual creado
import CounterDecrease from "./CounterDecrease";
import CounterIncrease from "./CounterIncrease";
import { Container } from "./Container";
import { useSelector } from "react-redux";

export default function App() {
  const count = useSelector(state => state);
  return (
    <div className="app">
      <p>Start editing to see some magic happen :)</p>
      <Container color={"pink"}>
        <CounterDecrease />
        <CounterIncrease />
      </Container>
      <div>{count}</div>
    </div>
  );
}
