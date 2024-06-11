// SecondQues.js
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Test.css'; // Import CSS file

export default function SecondQues() {
  const validationSchema1 = Yup.object().shape({
    Name: Yup.string()
      .required('Required')
      .min(2, 'Name should be minimum 2 characters')
      .max(10, 'Name should be maximum 10 characters'),
    Contact: Yup.string()
      .required('Required')
      .max(13, 'Contact should be maximum 13 characters'),
    permanentAddress: Yup.string().required('Required'),
    currentAddress: Yup.string().required('Required'),
    City: Yup.string().required('Required'),
    State: Yup.string().required('Required'),
  });

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <Formik
        initialValues={{
          Name: '',
          Contact: '',
          permanentAddress: '',
          currentAddress: '',
          City: '',
          State: '',
        }}
        validationSchema={validationSchema1}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="Name">First Name</label>
            <Field id="Name" name="Name" placeholder="Jane" />
            <ErrorMessage name="Name" component="span" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="Contact">Contact Number</label>
            <Field id="Contact" name="Contact" type="text" />
            <ErrorMessage name="Contact" component="span" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="permanentAddress">Permanent Address</label>
            <Field
              id="permanentAddress"
              name="permanentAddress"
              as="textarea"
              rows="4"
              placeholder="Enter permanent address"
            />
            <ErrorMessage
              name="permanentAddress"
              component="span"
              className="error"
            />
          </div>

          <div className="form-group">
            <label htmlFor="currentAddress">Current Address</label>
            <Field
              id="currentAddress"
              name="currentAddress"
              as="textarea"
              rows="4"
              placeholder="Enter current address"
            />
            <ErrorMessage
              name="currentAddress"
              component="span"
              className="error"
            />
          </div>

          <div className="form-group">
            <label htmlFor="City">City</label>
            <Field id="City" name="City" type="text" />
            <ErrorMessage name="City" component="span" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="State">State</label>
            <Field id="State" name="State" type="text" />
            <ErrorMessage name="State" component="span" className="error" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
