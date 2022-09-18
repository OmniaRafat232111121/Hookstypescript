import { useState,useContext } from "react";
import GoodContext,{UserState} from "../context/store";
function ConsumerComponent(){
const user=useContext(GoodContext);
return (
    <div>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
    </div>
  );

}
function UseContextComponent(){
    const [user,setUser]=useState<UserState>({
       first:'omnia',
       last:'rafat'
    });
    return(
    <UserContext.Provider value={user} >
      <ConsumerComponent/>
      <button
        onClick={() =>
          setUser({
            first: "Josie",
            last: "Wales",
          })
        }
      >
        Change context
      </button>
    </UserContext.Provider>
    );
}
export default UseContextComponent;