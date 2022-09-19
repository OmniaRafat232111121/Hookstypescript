import { useReducer } from "react";
const initialState={
    counter:100
}
type ACTIONTYPES =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };
function countReducer(state:typeof initialState,action:ActionTypes){
switch(action.type){
    case "increment":
        return{
            ...state,
            counter:state.counter+action.payload,
        };
        case "deccrement":
            return{
                ...state,
                counter:state.counter-action.payload,
            }
            default:
                throw new Error("Bad action");
}
}
function UseReducerComponent(){
const [state,dispatch]=useReducer(countReducer,initialState)
}
export default UseReducerComponent;