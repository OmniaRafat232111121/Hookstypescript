import { useState } from "react";

function UseStateComponent(){
const [arr,arrSet]=useState<number[]>([]);
const [name,nameSet]=useState<string|null>(null);
const [,countSet]=useState<number[]|null>([]);
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
        <button onClick={() => setClicks(clicks+1)}>+</button>
    <button onClick={() => setClicks(clicks-1)}>-</button>
          <pre>{JSON.stringify(clicks)}</pre>
        </div>
    </div>

);
}
export default UseStateComponent;