import React from "react";
import { Field, FieldArray } from "formik";
import { BsFillFileEarmarkPlusFill } from "react-icons/bs";
// import {firebase} from "../../../firebase/firebase";

const FieldArrayInput = (props) => {
  // const ref = firebase.firestore();
 
  return (
    <div>
          <FieldArray
            name={props.name}
              render={(arrayHelpers) => {
                        return <div>
                          {arrayHelpers.form.values[props.name]?.length > 0 ? 
                          (
                            arrayHelpers.form.values[props.name].map((assignee, index) => (
                                <div key={index} className="row justify-content-evenly">
                                  <button
                                    type="button"
                                    style={{ width: "7%" }}
                                    onClick={() => arrayHelpers.remove(index)}
                                  >
                                    -
                                  </button>
                                  <Field
                                    style={{ width: "30%" }}
                                    name={`taskAssignees.${index}`}
                                    placeholder="Assignee Email"
                                  />
                                  
                                  <button
                                    type="button"
                                    style={{ width: "7%" }}
                                    className=""
                                    onClick={() =>
                                      arrayHelpers.insert(index, "")
                                    } 
                                  >
                                    +
                                  </button>
                                </div>
                              )
                            )
                          ) : (
                            <button type="button" className="addBtn ms-2" onClick={() => arrayHelpers.push("")}>
                              Add an Assignee <BsFillFileEarmarkPlusFill />
                            </button>
                          )}
                        </div>
                    }}
            />
    </div>
  );
};

export default FieldArrayInput;
