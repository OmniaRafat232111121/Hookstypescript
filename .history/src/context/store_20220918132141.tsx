import { createContext } from "react";
const initialState={
    first:'omnia',
    last:'rafat'
};
const context= createContext<typeof (initialState);
export default context;