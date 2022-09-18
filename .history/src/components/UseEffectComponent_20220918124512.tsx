import {useEffect,useState} from 'react'
function UseEffectComponent(){
    const [val,valSet]=useState(1);
    useEffect(()=>{
        window.setInterval(()=>{
            valSet(val+1)
        })
    })
    return(
     <div>{val}</div>
    );

}
export default UseEffectComponent;