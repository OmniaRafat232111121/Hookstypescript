import { useReducer } from "react";
const initialState={
    counter:100
}
type ActionTypes=
|{type:'increment';paylod:number}
|{type:'crement';paylod:number}
function countReducer(state:typeof initialState,actions:ActionTypes){

}
function UseReducerComponent(){
const [state,dispatch]=useReducer(counterReducer,initialState)
}
export default UseReducerComponent;