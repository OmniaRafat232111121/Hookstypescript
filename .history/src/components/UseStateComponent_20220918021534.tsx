import { useState } from "react";

 UseStateComponent(){
const [arr,arrSet]=useState<number[]>([]);
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
