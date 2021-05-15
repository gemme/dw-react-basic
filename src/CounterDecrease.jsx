import React from 'react'
import './style.css';
/* export class Counter extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      count: this.props.store.getState(),
    };
  }

  onIncrease() {
    const action = {
      type: 'INCREASE_COUNTER',
    };
    this.props.store.dispatch(action);
    const _stateRedux = this.props.store.getState();
    console.log(_stateRedux);
    this.setState({
      count: _stateRedux
    });
  }
  onDecrease() {}


  render() {
    return (
      <>
        <button onClick={() => {
          this.onIncrease();
        }}>{'Increase'}</button>
        <button>{'Decrease'}</button>
      </>
    )
  }
} */

const onDecrease = (store) => {
    const action = {
      type: 'DECREASE_COUNTER',
    };
    store.dispatch(action);
    const _stateRedux = store.getState();
  };

export const CounterDecrease = (props) => {
    return (
      <div className={'counter'}>
        <button onClick={
          () => {
            onDecrease(props.store);
        }}>{'Decrease'}</button>
      </div>
    )
}