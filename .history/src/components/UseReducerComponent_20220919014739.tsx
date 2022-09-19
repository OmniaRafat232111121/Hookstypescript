import { useReducer } from "react";
const initialState={
    
}
function countReducer(state:typeof initialState,){

}
function UseReducerComponent(){
const [state,dispatch]=useReducer(counterReducer,initialState)
}
export default UseReducerComponent;