import { createContext } from "react";
const initialState={
    first:'omnia',
    last:'rafat'
};
export typ
const context= createContext<typeof initialState> (initialState);
export default context;