import { useReducer } from "react";
const initialState={
    counter:100;
}
function countReducer(state:typeof initialState,actions:Actio){

}
function UseReducerComponent(){
const [state,dispatch]=useReducer(counterReducer,initialState)
}
export default UseReducerComponent;