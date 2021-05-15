import React from 'react'
import './style.css';


const onIncrease = (store) => {
    const action = {
      type: 'INCREASE_COUNTER',
    };
    store.dispatch(action);
    const _stateRedux = store.getState();
  };

export const CounterIncrease = (props) => {
    return (
      <div className={'counter'}>
        <button onClick={
          () => {
            onIncrease(props.store);
        }}>{'Increase'}</button>
      </div>
    )
}