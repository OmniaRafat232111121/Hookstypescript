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
data: Beverage[] | null;
  done: boolean;
}

function CustomHookComponent(){
    const { data,done } = useFetchData<Beverage[]>("/hv-taplist.json");
    return(
        <div>
     {done&&(
        <img src={data![0].logo}/>
     )}
        </div>
    );
}
export default CustomHookComponent;