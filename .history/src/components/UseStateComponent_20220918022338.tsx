import { useState } from "react";

function UseStateComponent(){
const [arr,arrSet]=useState<number[]>([]);
const [name,nSet]=useState<number[]>([]);
return(
    <div>
        <div>
            <button onClick={()=>arrSet([
                ...arr,
                arr.length+1
            ])}>Add to array</button>
          <pre>{JSON.stringify(arr)}</pre>
        </div>
    </div>

);
}
export default UseStateComponent;