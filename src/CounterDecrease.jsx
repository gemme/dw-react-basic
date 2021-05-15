import React from 'react'
import './style.css';
import { connect } from 'react-redux';

const CounterDecrease = (props) => {
    return (
      <div className={'counter'}>
        <button onClick={
          () => {
            props.onDecrease();
        }}>{'Decrease'}</button>
      </div>
    )
}

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
  return {
    // pass onDecrease as prop
    onDecrease: () => dispatch({type: 'DECREASE_COUNTER'})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterDecrease);