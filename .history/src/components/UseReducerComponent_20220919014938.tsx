import { useReducer } from "react";
const initialState={
    counter:100
}
type ActionTypes=
|{type:'increment';paylod:number}
|{type:'decrement';paylod:number}
function countReducer(state:typeof initialState,actions:ActionTypes){
switch(act)
}
function UseReducerComponent(){
const [state,dispatch]=useReducer(counterReducer,initialState)
}
export default UseReducerComponent;