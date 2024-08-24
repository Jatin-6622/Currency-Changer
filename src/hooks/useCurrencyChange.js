import {useState,useEffect} from "react";
function useCurrencyChange(currency){
    const [curr,setCurr]=useState({});
    useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/`+`${currency}`+`.json`)
    .then((res)=>res.json())
    .then((res)=>setCurr(res[currency]))
    .catch((error) => console.error("Error fetching currency data:", error));
},[currency])
return curr;
}
export default useCurrencyChange;