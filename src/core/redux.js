export function createStore(reducer) {
    let state = reducer(state,action);
    const listeners = new Set();
  
    const getState = () => ({ ...state });
  
    const dispatch = (action) => {
      state = reducer(state, action);
      console.log('update state', state);
      publish();
    };
  
    const subscribe = (fn) => listeners.add(fn);
    const publish = () => listeners.forEach((fn) => fn());
  
    return {
      getState,
      dispatch,
      subscribe,
    };
  }