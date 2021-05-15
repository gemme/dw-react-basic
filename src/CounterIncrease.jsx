import React from 'react'
import './style.css';
import { connect } from 'react-redux';

const CounterIncrease = (props) => {
    return (
      <div className={'counter'}>
        <button onClick={
          () => {
            props.onIncrease();
        }}>{'Increase'}</button>
      </div>
    )
}

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
  return {
    // pass onDecrease as prop
    onIncrease: () => dispatch({type: 'INCREASE_COUNTER'})
  }
};

// High Order Components
export default connect(mapStateToProps, mapDispatchToProps)(CounterIncrease);