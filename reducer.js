const initialState = { counters: [] };


const reducer = (state = initialState, action) => {
    let { type, payload } = action;
    console.log(action);
    switch(type) {  
        case "ADD_COUNTER":
            state = Object.assign({}, state);
            state.counters.push(payload);
            break;
        case "INCREMENT":
            state.counters.forEach((counter, index) => {
                if (index === payload.index) return counter.value += 1
            });
            break;
        case "DECREMENT":
            state.counters.forEach((counter, index) => {
                if (index === payload.index) return counter.value -= 1
            });
            break;
        case "INCREMENT_FIVE":
            state.counters.forEach((counter, index) => {
                if (index === payload.index) return counter.value += 5
            });
            break;
        case "DECREMENT_FIVE":
            state.counters.forEach((counter, index) => {
                if (index === payload.index) return counter.value -= 5
            });
            break;
        case "INCREMENT_MANUAL_VALUE":
            state.counters.forEach((counter, index) => {
                if (index === payload.index) return counter.value += payload.value
            });
            break;
        case "DECREMENT_MANUAL_VALUE":
            state.counters.forEach((counter, index) => {
                if (index === payload.index) return counter.value -= payload.value
            });
            break;
        case "CHANGE_COLOR":
            state.counters.forEach((counter, index) => {
                if (index === payload.index) return counter.color = payload.color
            });
            break;
        default:
            return state
    }
    return state;
}