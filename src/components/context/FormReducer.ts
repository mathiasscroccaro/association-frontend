export interface CounterState {
    count: number;
}

const initialState: CounterState = { count: 0 };

export type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };

const counterReducer = (state: CounterState, action: Action): CounterState => {
    switch (action.type) {
        case 'INCREMENT':
            console.log("aumentando velor")
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

export { initialState, counterReducer };