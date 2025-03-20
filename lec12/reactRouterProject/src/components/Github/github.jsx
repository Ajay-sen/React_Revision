import React, { useEffect, useState } from 'react'

const Github = () => {

const [data,setData]=useState([])

//  so eill mhave to access git hub ai, when mthis page loaded, so need to use useEffect
useEffect(()=>{
    fetch('https://api.github.com/users/Ajay-sen66')
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        setData(data)
    })
},[])


  return (
    <div>Github followers: {data.followers}
     <img src={data.avatar_url}/>
    </div>
   
  )
}

export default Github