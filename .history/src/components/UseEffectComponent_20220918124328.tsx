import {useEffect,useState} from 'react'
function UseEffectComponent(){
    const [val,valSet]=useState(1);
    
    return(
     <div>{val}</div>
    );

}
export default UseEffectComponent;