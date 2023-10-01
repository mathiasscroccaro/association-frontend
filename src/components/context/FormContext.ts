import { createContext, Dispatch } from 'react';
import { FormState } from './FormReducer';
import { Action } from './FormReducer';
import { initialState } from './FormReducer';

interface FormContextType {
  state: FormState;
  dispatch: Dispatch<Action>;
}

const FormContext = createContext<FormContextType>({
    state: initialState,
    dispatch: () => undefined
});

export default FormContext;