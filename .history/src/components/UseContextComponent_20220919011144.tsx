import { useState,useContext } from "react";
import UserContext,{UserState} from "../context/store";
function ConsumerComponent(){
const user=useContext(UserContext);
}
function UseContextComponent(){
    const [user,setUser]=useState<UserState>({
       first:'omnia',
       last:'rafat'
    });
    return(
    <UserContext.Provider value={user} >
      <ConsumerComponent
    </UserContext.Provider>
    );
}