import {useEffect, useState} from "react";

//customized hook:

function useCurrencyInfo(currency){

    const [data, setData]=useState({})
    //although the below api url is working wrie now, its working is that, we have to pass usd, inr or any currency in plavce of ${currency}
    -//then it will give values of conversion value, like on passing usd, it will list down all other currency values equivalent to 1 dollar 
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json()) //converted the string data format to json to use
        .then((res)=>setData(res[currency]))
    },[currency])
    //above given is the dependency , ie when ever there will willc hange in the currency , it will be called again
    console.log(data);
    return data;
}

export default useCurrencyInfo;

// so we returns the methids entire , not just the data, in custom hooks