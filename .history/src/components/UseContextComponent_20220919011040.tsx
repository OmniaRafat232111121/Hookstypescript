import { useState,useContext } from "react";
import UserContext,{UserState} from "../context/store";
fun
function UseContextComponent(){
    const [user,setUser]=useState<UserState>({
       first:'omnia',
       last:'rafat'
    });
    return(
    <UserContext.Provider value={user} >

    </UserContext.Provider>
    );
}