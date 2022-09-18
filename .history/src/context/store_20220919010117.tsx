import { createContext } from "react";
const initialState={
    first:'omnia',
    last:'rafat'
};
export typeof UserState=typeof initialState
const context= createContext<typeof initialState> (initialState);
export default context;