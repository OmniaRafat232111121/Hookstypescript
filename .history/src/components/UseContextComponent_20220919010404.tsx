import { useState } from "react";
import UserContext,{UserState} from "../context/store";
function UseContextComponent(){
    const [user,setUser]=useState<UserState>({
       first:'omnia',
       last:''
    });
    return(
    <UserContext.Provider >

    </UserContext.Provider>
    );
}