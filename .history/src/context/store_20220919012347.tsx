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
    lang:'arabic'
}
export type LangState=typeof ini
const context=createContext<typeof initialstate>(initialState);
