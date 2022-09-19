import {useState,useEffect} from 'react'

export interface Beverage {
    name: string;
    producerName: string;
    beverageName: string;
    beverageColor: string;
    beverageStyle: string;
    producerLocation: string;
    abv: number;
    ibu: number;
    logo: string;
    level: number;
  }
  
function useFetchData(url:string){
    data: Payload | null;
  done: boolean;
}
const [data,dataSet]=useState<Beverage[]|null>(null);
const [done,dataDone]=useState(false);
useEffect(()=>{
    fetch(url)
     .then(resp=>resp.json())
     .then(d=>{
        dataSet(d);
        dataDone(true);

     })
},[url])
return{
    data,done
}
}
function CustomHookComponent(){
    return(
        <div>

        </div>
    );
}
export default CustomHookComponent;