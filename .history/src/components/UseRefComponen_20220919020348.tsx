import {useRef} from 'react'
function UseRefComponent(){
const inputRef=useRef<HTMLInputElement | null>(null);
return(
<div>
    <input ref={inp}
</div>
);
}
export default UseRefComponent;