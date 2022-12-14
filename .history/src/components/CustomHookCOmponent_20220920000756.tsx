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
  

function useFetchData<Payload>(url: string
  ): {
    data: Payload | null;
    done: boolean;
  }{
   const [data, dataSet] = useState<Payload | null>(null);
const [done, doneSet] = useState(false);

useEffect(() => {
  fetch(url)
    .then((resp) => resp.json())
    .then((d: Payload) => {
      dataSet(d);
      doneSet(true);
    });
}, [url]);

return {
  data,
  done,
};
  }

function CustomHookComponent(){
    const { data,done } = useFetchData<Beverage[]>("/hv-taplist.json");
    return(
        <div>
     {done&&(
        <img src={data![2].logo}/>
     )}
        </div>
    );
}
export default CustomHookComponent;