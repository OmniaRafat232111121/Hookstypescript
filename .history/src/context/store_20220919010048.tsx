import { createContext } from "react";
const initialState={
    first:'omnia',
    last:'rafat'
};
expor
const context= createContext<typeof initialState> (initialState);
export default context;