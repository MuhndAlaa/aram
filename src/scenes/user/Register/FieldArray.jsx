import React from 'react';
import { Field, FieldArray } from 'formik';
import { BsFillFileEarmarkPlusFill } from "react-icons/bs";


const FieldArrayInput = ({ name }) => (
  <div>
    <h4>Add Your Hoppies</h4>
    <FieldArray
      name={name}
      render={(arrayHelpers) => (
        <div>
          {arrayHelpers.form.values["hobbies"].length > 0 ? (
            arrayHelpers.form.values["hobbies"].map((friend, index) => (
              <div key={index} className="row justify-content-evenly">
                <button
                  type="button"
                  style={{width: "7%"}}
                  className=""
                  onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                >
                  -
                </button>
                <Field style={{width: "60%"}} name={`hobbies.${index}`} />
                <button
                  type="button"
                  style={{width: "7%"}}
                  className=""
                  onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                >
                  +
                </button>
              </div>
            ))
          ) : (
            <button type="button" onClick={() => arrayHelpers.push("")}>
              Add a Hobby <BsFillFileEarmarkPlusFill />
            </button>
          )}
        </div>
      )}
    />
  </div>
);

export default FieldArrayInput;