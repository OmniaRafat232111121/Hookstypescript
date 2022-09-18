import { createContext } from "react";
const initialState={
    first:'omnia',
    last:'rafat'
};
const context=<type of initialState>createContext(initialState);
export default context;