import { useState } from "react";
import UserContext,{UserState} from "../context";
function UseContextComponent(){
    const [user,setUser]=useState({

    });
    return(
    <UserContext.Provider >

    </UserContext.Provider>
    );
}