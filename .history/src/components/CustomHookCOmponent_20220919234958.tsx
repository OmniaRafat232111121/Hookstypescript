import {useState,useEffect} from 'react'
function useFetchData(url:string){
const [data,dataSet]=useState(null);
const [done,dataDone]=useState(false);
useEffect(()=>{
    fetch(url)
     .then(resp=>res)

})
}
function CustomHookComponent(){
    return(
        <div>

        </div>
    );
}
export default CustomHookComponent;