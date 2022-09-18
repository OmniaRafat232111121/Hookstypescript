import { useState,useContext } from "react";
import UserContext,{UserState} from "../context/store";
function ConsumerCompone
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