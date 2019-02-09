const initialState = { counters: [] };


const reducer = (state = initialState, action) => {
    let { type, payload } = action;
    console.log(action);

    switch(type) {  
        case "ADD_COUNTER":
        return {
            ...state,
            counters: [ ...state.counters, payload ]
        }
        case "INCREMENT":
        return {
            counters: state.counters.map((counter, index) => {
                if (index === payload.index) return {...counter, value: counter.value + 1}
                return counter;
            })
        }
        case "DECREMENT":
        return {
            counters: state.counters.map((counter, index) => {
                if (index === payload.index) return {...counter, value: counter.value - 1}
                return counter;
            })
        }
        case "INCREMENT_FIVE":
        return {
            counters: state.counters.map((counter, index) => {
                if (index === payload.index) return {...counter, value: counter.value + 5}
                return counter;
            })
        }
        case "DECREMENT_FIVE":
        return {
            counters: state.counters.map((counter, index) => {
                if (index === payload.index) return {...counter, value: counter.value - 5}
                return counter;
            })
        }
        case "INCREMENT_MANUAL_VALUE":
        return {
            counters: state.counters.map((counter, index) => {
                if (index === payload.index) return {...counter, value: counter.value + payload.value}
                return counter;
            })
        }
        case "DECREMENT_MANUAL_VALUE":
        return {
            counters: state.counters.map((counter, index) => {
                if (index === payload.index) return {...counter, value: counter.value - payload.value}
                return counter;
            })
        }
        case "CHANGE_COLOR":
        return {
            counters: state.counters.map((counter, index) => {
                if (index === payload.index) return {...counter, color: payload.color}
                return counter;
            })
        }
        default:
        return {
            ...state
        }
    }
}