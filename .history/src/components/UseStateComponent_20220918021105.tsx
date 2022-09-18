import { useState } from "react";

export const UseStateComponent: JSX.IntrinsicAttributes(){
const [arr,arrSet]=useState<number[]|null>([])
return(
    <div>
        <div>
            <button onClick={()=>arrSet([
                ...arr,
                
            ])}>Add to array</button>
          <pre>{JSON.stringify(arr)}</pre>
        </div>
    </div>

);
}
