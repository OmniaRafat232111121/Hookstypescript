// import { createContext } from "react";
// const initialState={
//     first:'omnia',
//     last:'rafat'
// };
// export type UserState=typeof initialState;
// const context= createContext<typeof initialState> (initialState);
// export default context;


import {createContext} from 'react';
const initialState={
    :'arabic'
}
export type LangState=typeof initialState;
const context=createContext<typeof initialState>(initialState);
