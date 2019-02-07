const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

const addCounterButton = document.getElementById('addCounter');
addCounterButton.addEventListener('click', e => dispatch({ type: "ADD_COUNTER", payload: {value: 0, color: "black"} }));

