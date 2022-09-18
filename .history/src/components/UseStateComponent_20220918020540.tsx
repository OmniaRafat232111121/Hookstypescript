import { useState } from "react";

function UseStateComponent(){
const [arr,arrSet]=useState<number[]|null>([])
return(
    <div>
        <div>
            <button>Add to array</button>
          <pre>{JSON.stringify}</pre>
        </div>
    </div>

);
}