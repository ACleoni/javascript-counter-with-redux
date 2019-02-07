/**
 * Helper function to dispatch action to reducer based on action types given. 
 * Takes the index to handle a specific counter and the event to target the color or manual number input.
 * 
 * The color can be extracted with event.target.value. The color value is given to each option in the selector. 
 * If a manual number is inserted, that value will come in the third paramter as event only. 
 * @param {*} index 
 * @param {*} actionType 
 * @param {*} event 
 */
const dispatchAction = (index, actionType, event) => {
    switch(actionType) {
        case "increment":
            dispatch({ type: "INCREMENT", payload: {index: index } });
            break;
        case "decrement":
            dispatch({ type: "DECREMENT", payload: {index: index } });
            break;
        case "incrementFive":
            dispatch({ type: "INCREMENT_FIVE", payload: {index: index } });
            break;
        case "decrementFive":
            dispatch({ type: "DECREMENT_FIVE", payload: {index: index } });
            break;
        case "changeColor":
            dispatch({ type: "CHANGE_COLOR", payload: {index: index, color: event.target.value } });
            break;
        case "+":
            dispatch({ type: "INCREMENT_MANUAL_VALUE", payload: { index: index, value: event } });
            break;
        case "-":
            dispatch({ type: "DECREMENT_MANUAL_VALUE", payload: { index: index, value: event } });
            break;
        default:
            console.error("Invalid Action Type.");
    }
}


/**
 * Prevent DOM Refresh with event.PreventDefault() when manual input is submitted. 
 * Assign the operator value to either + or - for the dispatcher to handle.
 * Grab the value of the input with document.getElementById
 * Pass all three values into the dispatchAction function.
 * @param {*} event 
 */
const handleSubmit = (index, event) => {
    event.preventDefault();
    const operator = event.target.value;

    let inputValue = document.getElementById(`numberInput_${index}`).value;
    if (!inputValue) inputValue = 0;
    
    dispatchAction(index, operator, parseInt(inputValue, 10));
}

/**
 * Maps over the current state of array counters and assigns and index
 * to each counter so redux knows which counter to handle when changing state
 * 
 * Notice that event has no quotes around it for the color selector. 
 * This is because we do not want to send a string in this case, but capture the actual event.
 * 
 * Also notice that the id of the input will be unique with each counter.
 * This is because providing unique id will prevent over-writing issues.
 * @param {*} state 
 */
const renderCounters = (state) => {
    const counters = state.counters.map((counter, index) => {
        return `<h1 id="counterValue" style="color: ${counter.color};">${counter.value}</h1>
                <button onclick="dispatchAction(${index}, 'increment')">+1</button>
                <button onclick="dispatchAction(${index}, 'decrement')">-1</button>
                <button onclick="dispatchAction(${index}, 'incrementFive')">+5</button>
                <button onclick="dispatchAction(${index}, 'decrementFive')">-5</button>
                <div style="margin: 10px auto;">
                    <input id="numberInput_${index}" placeholder="Enter Number" style="width: 150px;" />
                    <input onclick="handleSubmit(${index}, event)" id="add" name="submit" value="+" type="submit" />
                    <input onclick="handleSubmit(${index}, event)" id="subtract" name="submit" value="-" type="submit" />
                </div>
                <select onchange="dispatchAction(${index}, 'changeColor', event)">
                    <option>Select a Color</option>
                    <option value="black">Black</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option> 
                </select>`
    });
    return counters.join("");
}

/**
 * Renders the counters
 * @param {*} state 
 */
const render = (state) => {
    const counters = document.getElementById("counters");
    counters.innerHTML = renderCounters(state);
}