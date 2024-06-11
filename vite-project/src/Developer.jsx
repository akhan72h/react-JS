import React, { useEffect, useState } from 'react'

export default function Developer() {

    const [data, FuncData ] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() =>{

        fetch('https://www.course-api.com/react-tours-project')
       .then(y => y.json())
       .then(y => {
         FuncData(y)
        console.log(y);

       // console.log(data);
       // console.log(y);
       })

    },[]);
    console.log(data);
    // console.log(index);
   

  

    const next = (index) => {
  
     setIndex(index + 1);

     if(index > data.length-1)
        {
            setIndex(0);
        }
   }

    const prev = (index) => {

        if(index < 0)
            {
                setIndex(data.length-1);
            }
            else
            {
                setIndex(index - 1);
            }
}
const Surprise = () => {
    setIndex(0);
  };

 return (
  
<div>
         
      { 
    
        <main>
          <section class="container">
            <div class="title">
              <h2>our reviews</h2>
              <div class="underline"></div>
            </div>

            <article class="review">
              <div class="img-container">
              <img src={data[index].image} id="person-img" alt="" />
               </div>
              <h4 id="author">{data[index].name}</h4>
              <p id="job">{data[index].price}</p>
              <p id="info">{data[index].info}</p>
              <p id="ids">{data[index].id}</p>

              <div class="button-container">

                <button class="prev-btn" onClick= { prev } >
                  <i class="fas fa-chevron-left"></i>
                </button>

                <button class="next-btn"  onClick={next}>
                  <i class="fas fa-chevron-right"></i>
                </button>
              </div>

              <button class="random-btn" onClick={Surprise}>surprise me </button> 

            </article>
          </section>
        </main>
   }
    </div>
  )

}
