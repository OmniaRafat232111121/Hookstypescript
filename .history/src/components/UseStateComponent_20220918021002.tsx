import { useState } from "react";

export const UseStateComponent: an(){
const [arr,arrSet]=useState<number[]|null>([])
return(
    <div>
        <div>
            <button>Add to array</button>
          <pre>{JSON.stringify(arr)}</pre>
        </div>
    </div>

);
}
