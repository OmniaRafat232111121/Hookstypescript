// import { useState,useContext } from "react";
// import UserContext,{UserState} from "../context/store";
// function ConsumerComponent(){
// const user=useContext(UserContext);
// return (
//     <div>
//       <div>First: {user.first}</div>
//       <div>Last: {user.last}</div>
//     </div>
//   );

// }
// function UseContextComponent(){
//     const [user,setUser]=useState<UserState>({
//        first:'omnia',
//        last:'rafat'
//     });
//     return(
//     <UserContext.Provider value={user} >
//       <ConsumerComponent/>
//       <button
//         onClick={() =>
//           setUser({
//             first: "Josie",
//             last: "Wales",
//           })
//         }
//       >
//         Change context
//       </button>
//     </UserContext.Provider>
//     );
// }
// export default UseContextComponent;


import { useContext,useState  } from "react";
importUserContext,{LangState} from'react'
function ConsumerComponent(){
    const lang=useContext(UserContext);
    return (
        <div>
          <div>First: {lang.tran}</div>
         
        </div>
      );
function UseContextComponent(){
    const [lang,setLang]=useState<LangState>({
           tran:'english'
            });
    return(
        <UserContext.Provider value={lang} >
     <ConsumerComponent/>
   <button
        onClick={() =>
          setLang({
        tran:'tyt'
          })
        }
      >
        Change context
      </button>
    </UserContext.Provider>
         );

    
}