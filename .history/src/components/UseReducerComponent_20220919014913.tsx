import { useReducer } from "react";
const initialState={
    counter:100
}
type ActionTypes=
|{type:'increment';paylod}
function countReducer(state:typeof initialState,actions:ActionTypes){

}
function UseReducerComponent(){
const [state,dispatch]=useReducer(counterReducer,initialState)
}
export default UseReducerComponent;