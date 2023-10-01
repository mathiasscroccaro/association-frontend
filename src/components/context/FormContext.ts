import { createContext, Dispatch } from 'react';
import { FormState } from './FormReducer';
import { Action } from './FormReducer';
import { initialState } from './FormReducer';

interface CounterContextType {
  state: FormState;
  dispatch: Dispatch<Action>;
}

const CounterContext = createContext<CounterContextType>({
    state: initialState,
    dispatch: () => undefined
});

export default CounterContext;