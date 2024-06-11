import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik';

export default function Emp() {

    
  return (
    
    <Formik

    initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      city: '',
      educationlevel:'',
      accept:false,
        hob:[]
    }}
    onSubmit={ (values) => {
      console.log(values);
    }}
  >
    <Form>
      <label htmlFor="firstName">First Name</label>
      <Field id="firstName" name="firstName" placeholder="Jane" />

      <label htmlFor="lastName">Last Name</label>
      <Field id="lastName" name="lastName" placeholder="Doe" />

      <label htmlFor="email">Email</label>
      <Field
        id="email"
        name="email"
        placeholder="jane@acme.com"
        type="email"
      />

   <Field name="city" as="select">
      <option value="vadodara">Vadodara</option>
      <option value="Surat">Surat</option>
      <option value="Pune">Pune</option>
 </Field>

   <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="educationlevel" value="master" />
              master
            </label>
            <label>
              <Field type="radio" name="educationlevel" value="bachelor" />
              Bachelor
            </label>
            
    </div>


           <label>

                 <Field type="checkbox" name="accept" />
         
          </label>

          <div id="checkbox-group">Checked</div>

          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="hob" value="Cricket"/>
              Cricket
            </label>
            <label>
              <Field type="checkbox" name="hob" value="Football"/>
              Football
            </label>
            <label>
              <Field type="checkbox" name="hob" value="Basketball"/>
              Basketball
            </label>
          </div>

      <button type="submit">Submit</button>
    </Form>
  </Formik>
  )
}
