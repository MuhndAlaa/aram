import React from "react";
import { ErrorMessage } from "formik";
import './forms.scss';

const FormikErrorMessage = ({ name }) => {
  return (
    <ErrorMessage name={name}>
      {(errMessage) => {
        return (
          <div className="">
            <div className="alert-danger">{errMessage}</div>
          </div>
        );
         ;
      }}
    </ErrorMessage>
  );
};

export default FormikErrorMessage;