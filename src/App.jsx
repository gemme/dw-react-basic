import React from 'react';
import './style.css';
// import { createStore, reducer } from './store'; // con este se usa el createStore manual creado
import { reducer } from './store';
import { createStore } from 'redux';  // con este se usa el createStore de libreria de redux
import { CounterDecrease } from './CounterDecrease';
import { CounterIncrease } from './CounterIncrease';
import { Container } from './Container';

const store = createStore(reducer);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: store.getState()
    };
  }

  render() {
    return (
      <div className='app'>
        <p>Start editing to see some magic happen :)</p>
        <Container color={'pink'}>
         <CounterDecrease store={store} />
        </Container>
        <Container color={'purple'}>
         <CounterIncrease store={store} />
        </Container>
        <div>{this.state.count}</div>
      </div>
    );
  }

  componentDidMount() {
    store.subscribe(() => {
      // connect App state with redux state
      const _stateRedux = store.getState();
      this.setState({
        count: _stateRedux
      });
    });
  }
}
