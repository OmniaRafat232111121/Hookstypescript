import {useEffect,useState} from 'react'
function UseEffectComponent(){
    const [val,valSet]=useState(1);
    useEffect(())
    return(
     <div>{val}</div>
    );

}
export default UseEffectComponent;