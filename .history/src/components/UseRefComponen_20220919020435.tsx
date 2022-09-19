import {useRef} from 'react'
function UseRefComponent(){
const inputRef=useRef<HTMLInputElement | null>(null);
return(
<div>
    <input ref={inputRef}/>
    <button onClick={()=>inputRef.current?}></button>
</div>
);
}
export default UseRefComponent;