
import React, { useReducer, ReactNode } from 'react';
import CounterContext from './FormContext';
import { initialState, counterReducer, FormState, Action } from './FormReducer';

interface CounterProviderProps {
  children: ReactNode;
}

const CounterProvider: React.FC<CounterProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;