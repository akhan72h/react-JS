import React, { useState } from 'react'
import EmployeeForm from './EmployeeForm'
import DisplayForm from './DisplayForm'
import { Button } from '@mui/material';

export default function Parent() {

    const [open, setOpen] = useState(false);
    const [data,setData] = useState([]);
    const [id,setId] = useState(-1); // because the array index is always starting from 0;

    

    const addData = (v,id)=>{

            let p = [...data];
            if(id>0)
            {
                let a = p.find((b)=>{
                     return b.id ===  id;
                });
                a.firstName = v.firstName;
                a.lastName = v.lastName;

            }
            else{
              p.push({...v,id:p.length+1});
            }
           
            setData(p);

    }

    const removeRecord = (id)=>{
      alert("Are You sure.... you want to Delete");
      //console.log(id);
      //console.log(data);
      let p = [...data];

      let remo = p.filter((v)=>{
      return  v.id != id;
      })

      setData(remo);

    }
    const editRecord = (id1)=>{
      
      setId(id1);
      setOpen(true);  //to open the popup;

}

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
  return (
    <div>
        
        <Button variant="outlined" onClick={handleClickOpen}>
       Add Employee
      </Button>
        <EmployeeForm 
        open={open}
        handleClose={handleClose} 
        addFun={addData}
        p = {data}
        id = {id}
        />
        <DisplayForm data={data} removeRecord={removeRecord} editRecord={editRecord}/>
    </div>
  )
}