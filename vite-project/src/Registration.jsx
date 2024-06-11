import React, { useState } from 'react'

export default function Registration() {

    const [form,setForm] = useState({

        firstName: '',
        lastName: '',
        
    });

      const handleChange = (e) =>{
        
        setForm({...form,[e.targe.name]:e.target.value});

      }

  

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    }

  

  return (
    <div>
        {
            <form onSubmit={handleSubmit}>
                <input type="text" value={form.firstName} onChange={handleChangeFirstName} name='firstName' />
                <input type="text" value={form.lastName} onChange={handleChangeLastName} name='lastName' />
                <button type="submit">Submit</button>
            </form>


        }

    </div>
  )
}
