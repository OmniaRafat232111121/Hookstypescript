import { useState } from "react";

function UseStateComponent(){
const [arr,arrSet]=useState<number[]>([]);
const [name,nameSet]=useState<string|null>(null);
const [count,countSet]=useState<number[]|>([]);
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

        <div>
            <button onClick={()=>countSet(count+1)}>Add to array</button>
            <button onClick={()=>countSet(count-1)}>dec from array</button>
          <pre>{JSON.stringify(count)}</pre>
        </div>
    </div>

);
}
export default UseStateComponent;