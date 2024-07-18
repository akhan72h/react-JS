import React, { useState } from 'react'
import EmployeeForm from './EmployeeForm'
import DisplayForm from './DisplayForm1'
import { Button } from '@mui/material';

export default function Parent() {

    const [open, setOpen] = useState(false);
    const [data,setData] = useState([]);

    

    const addData = (v)=>{

            let p = [...data];
            p.push({...v,id:p.length+1});
            setData(p);

    }

    const removeRecord = (id)=>{
      alert("d");
      console.log(id);
      console.log(data);
      let p = [...data];

      let remo = p.filter((v)=>{
      return  v.id != id;
      })

      setData(remo);

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
     addf={addData}
        />
        <DisplayForm data={data} removeRecord={removeRecord}/>
    </div>
  )
}