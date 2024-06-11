
import React, { useEffect, useState } from 'react'
import './Test.css'; // Import  CSS file

export default function Test() {

    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

      useEffect(() =>{

        fetch('https://jsonplaceholder.typicode.com/posts')
       .then(y => y.json())
       .then(y => { setData(y)})
       
       },[]);
    
       const handleSearch = (e) => {
        console.log(e.target.value);
        setSearchTerm(e.target.value);
      };

      const filteredData = data.filter(value =>
        value.title.includes(searchTerm)
      );
  return (

    
<div className="container">

<input
        type="search"
        placeholder="Search..."
        className="search-input"
        value={searchTerm}
        onChange={handleSearch} />
 

                <table className="data-table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((v)=>{
                    return (<tr>
                      <td>{v.id}</td>
                      <td>{v.title}</td>
                      <td>{v.body}</td>
                    </tr>)
                  })}
                </tbody>
              </table>

 </div>
  )
}
