import { useState } from "react";

function UseStateComponent(){
const [arr,arrSet]=useState<number[]>([1,2]);
return(
    <div>
        <div>
            <button onClick={()=>arrSet([
                ...arr,
                arr.length+3
            ])}>Add to array</button>
          <pre>{JSON.stringify(arr)}</pre>
        </div>
    </div>

);
}
export default UseStateComponent;