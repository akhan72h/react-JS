import React, { useEffect, useState } from 'react'

export default function DisplayData() {

    const [data, setData] = useState([]);

    useEffect(() =>{

        fetch('https://jsonplaceholder.typicode.com/users')
       .then(y => y.json())
       .then(y => { setData(y)
    
       })

    },[]);
  return (
    <div>{data.map((v)=>{
        return (<h2>{v.name}</h2>)
    })}</div>
) 
}

