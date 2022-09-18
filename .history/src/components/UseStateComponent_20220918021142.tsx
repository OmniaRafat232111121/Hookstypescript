import { useState } from "react";

export const UseStateComponent: JSX.IntrinsicAttributes(){
const [arr,arrSet]=useState<a[]|null>([])
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
