import { useState } from "react";

function UseStateComponent(){
const [arr,arrSet]=useState<number[]>([]);
const [name,nameSet]=useState<string|null>(null);
const [clicks,setClicks]=useState<number>(0);
const[name,setName]=us
const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name);
};
const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
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
            <input type="text" placeholder="name" value={name} onChange={onNameChange} />
                <button > submit</button>
            </form>
        </div>
    </div>

);
}
export default UseStateComponent;