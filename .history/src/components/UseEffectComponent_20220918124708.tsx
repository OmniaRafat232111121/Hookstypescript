import {useEffect,useState} from 'react'
function UseEffectComponent(){
    const [val,valSet]=useState(1);
    useEffect(()=>{
        window.setInterval(()=>{
            valSet(val+1)
        },1000)
    })
    return(
        <h1>Use Eff</h1>
     <div>{val}</div>
    );

}
export default UseEffectComponent;