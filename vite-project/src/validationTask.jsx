import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import "./color.css";
export default function Validationtask() {
  const validationSchema1 = Yup.object().shape({
    graduation: Yup.string().required("graduation is Required"),
    AcceptTerm: Yup.bool().oneOf([true], "AcceptTerm is Required "),
    startDate: Yup.date().required("startDate is Required"),
   
    endDate: Yup.date().when("AcceptTerm", {
      is: false,
      then: (Schema)=>Schema.required("endDate is Required"),
      otherwise: (Schema)=>Schema.nullable(),
    }),
  });
  return (
    <Formik
      initialValues={{
        graduation: "",
        startDate: "",
        AcceptTerm: false,
        endDate: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={validationSchema1}
    >
      {({ values }) => (
        <Form>
          <div>
            <label htmlFor="graduation">Graduation : </label>
            <Field
              id="graduation"
              name="graduation"
              type="text"
              placeholder="B.sc"
            />
            <ErrorMessage
              name="graduation"
              component="span"
              className="error"
            />
          </div>
          <div>
            <label htmlFor="startDate">Start Date : </label>
            <Field id="startDate" name="startDate" type="date" />
            <ErrorMessage name="startDate" component="span" className="error" />
          </div>
          <div>
            <label htmlFor="graduation">Persuing : </label>
            <Field id="AcceptTerm" name="AcceptTerm" type="checkbox" />
            <ErrorMessage
              name="AcceptTerm"
              component="span"
              className="error"
            />
          </div>
          <div>
            <label htmlFor="endDate">End Date : </label>
            <Field
              id="endDate"
              name="endDate"
              type="date"
              disabled={values.AcceptTerm}
            />
            <ErrorMessage name="endDate" component="span" className="error" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}