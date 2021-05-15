

const initialState = 1001;
export const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case 'INCREASE_COUNTER':
        return state + 1;
      case 'DECREASE_COUNTER':
        return state - 1;
      default:
        return state;
    }
  };
  
  // redux lib
  export const createStore = reducer => {
    // init state
    let _state = reducer();
    let _listener;
    const store = {
      dispatch: action => {
        const newState = reducer(_state, action);
        _state = newState;
        _listener?.();
      },
      getState: () => {
        return _state;
      },
      subscribe: cb => {
       _listener = cb; 
      }
    };
    return store;
  };
  