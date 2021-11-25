import { Formik, Form } from "formik";
import * as yup from "yup";
import React from "react";
import { Field, FieldArray } from "formik";
import { BsFillFileEarmarkPlusFill } from "react-icons/bs";
import { useState } from "react";
// import {firebase} from "../../../firebase/firebase";
import { Button, Modal } from "react-bootstrap";

const FieldArrayInput = (props) => {
  // const ref = firebase.firestore();

  const handleTaskAssignees =(props)=>{
    // console.log('project: ',props.project_id,'board: ',props.board_id,values[`${props.name}`]);
    // values[`${props.name}`].forEach((assignee, i)=>{
    //   console.log(assignee);
    //   ref.collection("projects").doc(props.project_id).collection('boards').doc(props.board_id).update({
    //     boardAssigneesEmails: firebase.firestore.FieldValue.arrayUnion(assignee.email)
    //     })
    //   ref.collection("projects").doc(props.project_id).collection('boards').doc(props.board_id).collection(props.name).add({...assignee,board_id:props.board_id})
    // })
  }
 
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
