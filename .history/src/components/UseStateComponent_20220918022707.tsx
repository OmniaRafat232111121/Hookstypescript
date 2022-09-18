import { useState } from "react";

function UseStateComponent(){
const [arr,arrSet]=useState<number[]>([]);
const [name,nameSet]=useState<string|null>(null);
const [coun]
return(
    <div>
        <div>
            <button onClick={()=>arrSet([
                ...arr,
                arr.length+1
            ])}>Add to array</button>
          <pre>{JSON.stringify(arr)}</pre>
        </div>

        <div>
            <button onClick={()=>nameSet("omnia")}>Add to array</button>
          <pre>{JSON.stringify(name)}</pre>
        </div>
    </div>

);
}
export default UseStateComponent;