import { useState } from "react";

function UseStateComponent(){
const [arr,arrSet]=useState<number[]>([]);
return(
    <div>
        <div>
            <button onClick={()=>arrSet([
                ...arr,
                arr.length+aee
            ])}>Add to array</button>
          <pre>{JSON.stringify(arr)}</pre>
        </div>
    </div>

);
}
export default UseStateComponent;