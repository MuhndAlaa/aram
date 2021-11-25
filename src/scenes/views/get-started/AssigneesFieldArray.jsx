import { Formik, Form } from "formik";
import React from "react";
import { Field, FieldArray } from "formik";
import { BsFillFileEarmarkPlusFill } from "react-icons/bs";
import { useState } from "react";
import firebase from "../../../firebase/firebase";
import { Button, Modal } from "react-bootstrap";
import './forms.scss';


const AssigneesFieldArray = (props) => {
  const ref = firebase.firestore();
  const roles = ["editor", "viewer"];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddAssignees = (values) => {
    values[`${props.name}`].forEach((assignee, i)=>{
      ref.collection("projects").doc(props.project_id).collection(props.name).add({...assignee,project_id:props.project_id})
      ref.collection("projects").doc(props.project_id).update({
        projectAssigneesEmails: firebase.firestore.FieldValue.arrayUnion(assignee.email)
        })
    })
    handleClose();
  };

  const handleBoardAssignees =(values)=>{
    values[`${props.name}`].forEach((assignee, i)=>{
      ref.collection("projects").doc(props.project_id).collection('boards').doc(props.board_id).update({
        boardAssigneesEmails: firebase.firestore.FieldValue.arrayUnion(assignee.email)
        })
      ref.collection("projects").doc(props.project_id).collection('boards').doc(props.board_id).collection(props.name).add({...assignee,board_id:props.board_id})
    })
    handleClose();
  }

  const initialValues = {
    projectAssignees: [{ email: "", role: "" }],
  };
  const onSubmit =(values)=>{
    (props.name ==='projectAssignees')?handleAddAssignees(values):handleBoardAssignees(values);
  }

  return (
    <div className="m-4">
      <button className="getstarted_btn add" variant="primary" onClick={handleShow}>
        Add your Assignees <BsFillFileEarmarkPlusFill />{props.project}
      </button>
            <Modal show={show} onHide={handleClose}>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
            >
              {(formik) => {
                return (
                  <Form>
                    <FieldArray
        name={props.name}
        render={(arrayHelpers) => {
          return (<>
                      <Modal.Header closeButton>
                        <Modal.Title>Add Your Assignees </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="">
                        <div>
    
                          {arrayHelpers.form.values[`${props.name}`]?.length > 0 ? 
                          (
                            arrayHelpers.form.values[`${props.name}`].map(
                              (assignee, index) => (
                                <div
                                  key={index}
                                  className="row assignee_body"
                                >
                                  <button className="add_delete"
                                    type="button"
                               
                                    onClick={() => arrayHelpers.remove(index)}
                                  >
                                    -
                                  </button>
                                  <Field
                                   className="assignee_email"
                                    style={{ width: "50%" }}
                                    name={`${props.name}.${index}.email`}
                                    placeholder="Email"
                                  />
                                  <Field
                                  className="dropdown"
                                    as="select"
                                    style={{ width: "20%" }}
                                    name={`${props.name}.${index}.role`}
                                  >
                                    {roles.map((role, key) => {
                                      return (
                                        <option className="options" value={role} key={key}>{role}</option>
                                      );
                                    })}
                                  </Field>
                                  <button className="add_delete"
                                    type="button"
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
                            <div className="d-flex justify-content-space-around">
                               <button
                              type="button" className="getstarted_btn add"
                              onClick={() => arrayHelpers.push("")}
                            >
                              Add an Assignee <BsFillFileEarmarkPlusFill />
                            </button>
                            </div>
                           
                          )
                          }
                        </div>
                        
                      </Modal.Body>
                      <Modal.Footer>
                        
                        <Button type="submit" className="save btns getstarted_btn" >
                               Save Changes
                        </Button>

                      </Modal.Footer>
                      </>)
                    }}
                    />
                  </Form>
                        );
              }}
            </Formik>
            </Modal>
          </div>
  );
};

export default AssigneesFieldArray;
