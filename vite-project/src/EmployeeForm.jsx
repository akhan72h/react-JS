import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';

export default function EmployeeForm({open,handleClose,addFun,id,p}) {

    const [data,setData] = useState({
        firstName : "",
        lastName : ""
    });

    const handleChange = (e)=>{
        setData({...data,[e.target.name]: e.target.value});
    }
    useEffect(()=>{

                if(id>0)
               {
                   let o = p.find((v)=>{
                    return v.id == id;
                   })
                   console.log(o);
                   setData({...o});
               }
              else{
                    setData({
                        firstName : "",
                        lastName : ""
                    })
 
              }
    },[id,open])
    
  return (
    <Dialog
    open={open}
    onClose={handleClose}
    PaperProps={{
      component: 'form',
      onSubmit: (event) => {
        event.preventDefault();
        addFun(data,id);
        handleClose();
      },
    }}
  >
    <DialogTitle>Subscribe</DialogTitle>
    <DialogContent>
    
      <TextField
        autoFocus
        required
        margin="dense"
        id="firstName"
        name="firstName"
        label="firstName"
        type="text"
        value={data.firstName}
        fullWidth
        variant="standard"
        onChange={handleChange}
      />

      
     <TextField
        autoFocus
        required
        margin="dense"
        id="lastName"
        name="lastName"
        label="last Name"
        type="text"
        value={data.lastName}
        fullWidth
        variant="standard"
        onChange={handleChange}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button type="submit">save</Button>
    </DialogActions>
  </Dialog>
  )
}