"use client";
import React, { createContext, ReactNode, useContext, useEffect, useReducer } from 'react';

export type StateContextDispatcher = React.Dispatch<Partial<IState>>;


export interface IState {

}

const defaultState: IState = {

};

export const StateContext = createContext(defaultState);
export const DispatchContext = createContext<any>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
    const [state, dispatch] = useReducer((oldState: IState, newValue: any) => {
        if (typeof newValue === 'function') return newValue(oldState);
        return {
            ...oldState,
            ...newValue,
        };
    }, defaultState);



    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
        </StateContext.Provider>
    );
};

export const useAppContext: () => [IState, any] = () => [
    useContext(StateContext),
    useContext(DispatchContext),
];
