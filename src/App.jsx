import React from 'react';
import './style.css';
// import { createStore, reducer } from './store'; // con este se usa el createStore manual creado
import CounterDecrease from './CounterDecrease';
import CounterIncrease from './CounterIncrease';
import { Container } from './Container';
import { connect } from 'react-redux';



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='app'>
        <p>Start editing to see some magic happen :)</p>
        <Container color={'pink'}>
          <CounterDecrease/>
          <CounterIncrease/>
        </Container>
        <div>{this.props.count}</div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  console.log('state: ', state );
  return {
    count: state
  };
};

export default connect(mapStateToProps)(App)
