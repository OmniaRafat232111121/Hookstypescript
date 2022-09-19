import { useReducer } from "react";
const initialState={
    counter:100;
}
function countReducer(state:typeof initialState,actions:ActionTy){

}
function UseReducerComponent(){
const [state,dispatch]=useReducer(counterReducer,initialState)
}
export default UseReducerComponent;