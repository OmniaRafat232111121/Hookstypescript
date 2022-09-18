import { useState } from "react";
import UserContext from "./store";
function UseContextComponent(){
    const [user,setUser]=usestate({

    });
    return(
    <UserContext.Provider >

    </UserContext.Provider>
    );
}