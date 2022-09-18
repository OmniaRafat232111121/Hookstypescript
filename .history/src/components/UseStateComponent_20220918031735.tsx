import { useState } from "react";

function UseStateComponent(){
const [arr,arrSet]=useState<number[]>([]);
const [name,nameSet]=useState<string|null>(null);
const [clicks,setClicks]=useState<number>(0);

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name);
};
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
        <p>Clicks: {clicks}</p>
         <button onClick={() => setClicks(clicks+1)}>+</button>
         <button onClick={() => setClicks(clicks-1)}>-</button>
          <pre>{JSON.stringify(clicks)}</pre>
        </div>

        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} placeholder="Enter your name" onClick={(e)=>setNamee(e.target.value)}/>
            </form>
        </div>
    </div>

);
}
export default UseStateComponent;