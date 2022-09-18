import { createContext } from "react";
const initialState={
    first:'omnia',
    last:'rafat'
};
e
const context= createContext<typeof initialState> (initialState);
export default context;