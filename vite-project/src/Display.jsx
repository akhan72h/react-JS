import { data } from "./data";
import React, { useState } from 'react'

export default function Display() {
  // const display = data.map((v)=>{
  //   return (<div class="card" style="width: 18rem;">
  //   <img src={v.image} class="card-img-top" alt="..."/>
  //   <div class="card-body">
  //     <h5 class="card-title">{v.name}</h5>
  //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //     <a href="#" class="btn btn-primary">Go somewhere</a>
  //   </div>
  // </div>)
  // })
  
  
  return (
    <div>
      {
         data.map((v,index)=>{
          return (
            <div key={index}>
            <div className="card" >
   <img src={v.image} className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title">{v.name}</h5>
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
            {/* {v.id}
            {v.name}
            {v.age}
          <img src={v.image} class="card-img-top" alt="..."/> */}
            </div>
          
          )
        })
      }
    </div>
  )
}
