import { createContext } from "react";
const initialState={
    first:'omnia',
    last:'rafat'
};
const context=<createContext of initialState>createContext(initialState);
export default context;