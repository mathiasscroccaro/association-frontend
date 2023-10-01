
import React, { useReducer, ReactNode } from 'react';
import FormContext from './FormContext';
import { initialState, counterReducer, FormState, Action } from './FormReducer';

interface FormProviderProps {
  children: ReactNode;
}

const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;