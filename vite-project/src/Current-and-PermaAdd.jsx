import React from 'react'
import { Formik, Field, Form } from 'formik';

export default function CurrentAddress() {

  return (
          
    <Formik

                initialValues={{
                fullName: '',
                permanentAddress: '',
                currentAddress: '',
                select: false
                
    }}

    onSubmit={ (values) => {

      console.log(values);

    }}>
    

    {({ values }) => (

        <Form >
        <label htmlFor="fullName">Full Name</label>
        <Field id="fullName" name="fullName" placeholder="FullName"/> <br/><br/>
  
       <label htmlFor="permanentAddress">Permanent Address</label>
        <Field id="permanentAddress" name="permanentAddress" as="textarea"/><br/><br/>
  
        <label htmlFor="currentAddress">Current Address</label>
        <Field id="currentAddress" name="currentAddress" as="textarea"/><br/><br/>
  
       
            <label htmlFor="accept">If Permanent address and Current address Same 
            <Field type="checkbox" name="select" onClick={ () =>{
  
              if(values.select===false){
  
                  values.currentAddress = values.permanentAddress;
                  
              }
              else{
                   values.currentAddress = ' ';
                   
                }

            }
            
          }/> </label>
          
   <button type="submit">Submit</button>
      </Form>
      )}

 </Formik>

  )
}
