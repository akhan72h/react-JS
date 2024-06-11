import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import* as Yup from "yup"
import './color.css'
export default function Validation() {

    const validationSchema1 = Yup.object().shape({
        firstName: Yup.string().required('Required')
                    .min(2,'FirstName Should be minimum 2 Character')
                    .max(10,'FirstName Should be maximum 10 Character'),
        lastName: Yup.string().required('Required')
                     .min(2,'FirstName Should be minimum 2 Character')
                     .max(10,'LastName Should be maximum 10 Character'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(12, 'Password must not exceed 40 characters'),
          confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
          acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
        
      });
   
  return (
    <Formik

    initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
      
   
    }}
    validationSchema = {validationSchema1}
    onSubmit={ (values) => {
      console.log(values);
    }}
  >
    <Form>
      <label htmlFor="firstName">First Name</label>
      <Field id="firstName" name="firstName" placeholder="Jane" />
      <ErrorMessage name= "firstName" component="span" className='error'/> <br /><br />

      <label htmlFor="lastName">Last Name</label>
      <Field id="lastName" name="lastName" placeholder="Doe" />
      <ErrorMessage name= "lastName" component="span" className='error'/> <br /><br />

      <label htmlFor="email">Email</label>
      <Field id="email" name="email" placeholder="jane@acme.com" type="email" />
      <ErrorMessage name= "email" component="span" className='error'/> <br /><br />

      <label htmlFor="password">Password</label>
      <Field id="password" name="password" type="password" />
      <ErrorMessage name= "password" component="span" className='error'/> <br /><br />

      <label htmlFor="confirmPassword">Confirm Password</label>
      <Field id="confirmPassword" name="confirmPassword" type="password" />
      <ErrorMessage name= "confirmPassword" component="span" className='error'/> <br /> <br />

      <label htmlFor="confirmPassword">Accept Term</label>
      <Field id=" acceptTerms" name="acceptTerms" type="checkbox" />
      <ErrorMessage name= "acceptTerms" component="span" className='error'/> <br /><br />

   

      <button type="submit">Submit</button>
    </Form>
  </Formik>
  )
}
