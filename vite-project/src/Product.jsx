import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function Product() {

    const [Product, setProduct]= useState([]);

    useEffect(() =>{

        axios.get('https://fakestoreapi.com/products')
      
       .then(y => { 
        
        console.log(y);
        setProduct(y.data);
    
       });
 } ,[]);

  return (
    <div>
        {
        
        Product.filter((v)=>{
            return v.category.includes("men") 
        }).map((v)=>{


            return (
                <div>
                    {v.category}
                </div>
            )
        })
        
        }
        </div>
  )
}
