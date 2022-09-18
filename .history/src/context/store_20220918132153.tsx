import { createContext } from "react";
const initialState={
    first:'omnia',
    last:'rafat'
};
const context= createContext<typeof initialState> (initialState);
export default context;