import React from 'react'
import './style.css';
import { useDispatch } from "react-redux";

export default function CounterIncrease (props) {
  const dispatch = useDispatch();
    return (
      <div className={'counter'}>
        <button onClick={
          () => {
            dispatch({type: 'INCREASE_COUNTER'});
        }}>{'Increase'}</button>
      </div>
    )
}