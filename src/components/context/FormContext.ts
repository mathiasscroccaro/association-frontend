import { createContext, Dispatch } from 'react';
import { CounterState } from './FormReducer';
import { Action } from './FormReducer';

interface CounterContextType {
  state: CounterState;
  dispatch: Dispatch<Action>;
}

const CounterContext = createContext<CounterContextType>({
    state: {
        count: 0
    },
    dispatch: () => undefined
});

export default CounterContext;