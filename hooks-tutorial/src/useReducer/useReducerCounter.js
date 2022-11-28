import {useReducer} from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'UP':
            return {value: state.value + 1};
        case 'DOWN':
            return {value: state.value - 1};
        default:
            return state;
    }
}

function ReducerCounter() {
    const [state, dispatch] = useReducer(reducer, {value: 0});

    return (
        <div>
            <button onClick={() => dispatch({type: 'UP'})}>UP</button>
            <button onClick={() => dispatch({type: 'DOWN'})}>DOWN</button>
            <p>{state.value}</p>
        </div>
    );
}

export default ReducerCounter;