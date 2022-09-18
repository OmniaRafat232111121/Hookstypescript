import { createContext } from "react";
const initialState={
    first:'omnia',
    last:'rafat'
};
export t
const context= createContext<typeof initialState> (initialState);
export default context;