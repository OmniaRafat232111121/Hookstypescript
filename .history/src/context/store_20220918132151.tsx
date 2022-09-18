import { createContext } from "react";
const initialState={
    first:'omnia',
    last:'rafat'
};
const context= createContext<typeof in> (initialState);
export default context;