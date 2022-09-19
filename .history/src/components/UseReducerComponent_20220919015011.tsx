import { useReducer } from "react";
const initialState={
    counter:100
}
type ActionTypes=
|{type:'increment';paylod:number}
|{type:'decrement';paylod:number}
function countReducer(state:typeof initialState,actions:ActionTypes){
switch(actions.type){
    case "increment":
        return{
            ...state,
            counter:state
        }
}
}
function UseReducerComponent(){
const [state,dispatch]=useReducer(counterReducer,initialState)
}
export default UseReducerComponent;