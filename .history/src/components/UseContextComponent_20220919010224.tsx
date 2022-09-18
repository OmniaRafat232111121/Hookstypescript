import { useState } from "react";
import UserContext,{Us} from "./store";
function UseContextComponent(){
    const [user,setUser]=useState({

    });
    return(
    <UserContext.Provider >

    </UserContext.Provider>
    );
}