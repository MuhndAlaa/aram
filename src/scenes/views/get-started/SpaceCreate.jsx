import { Formik, Form } from "formik";
import FormikField from "./FormikField";
import * as yup from "yup";
import AssigneesFieldArray from './AssigneesFieldArray';
import firebase from "../../../firebase/firebase";
import { useState } from "react";
import { Link } from "react-router-dom";
import getstarted from '../../../images/getstarted.png';
import "./forms.scss";
import {MDBBtn} from 'mdb-react-ui-kit';
import { useSelector } from "react-redux";

function SpaceCreate(props) {
  const [dataSent, setDataSent] =useState();
  const [project, setProject] = useState("");
  const [board, setBoard] = useState();
  const ref = firebase.firestore();
  const user = useSelector(state=>state.user)

  const projInitialValues = {
    project: "",
    ManagementMethod: ""
  };
  const boardInitialValues ={
    board: ""
  }
  const projValidationSchema = yup.object({
    project: yup
      .string()
      .min(3,"you can choose the name you like but min 3 chars")
      .max(100,"you can choose the name you like but min 100 chars")
      .required("this field is required"),
      ManagementMethod: yup
      .string()
      .required("this field is required")
      .min(3, "too short - should be 8 chars minimum.")
  });
  const boardValidationSchema = yup.object({
    board: yup
      .string()
      .min(3,"you can choose the name you like but min 3 chars")
      .max(100,"you can choose the name you like but min 100 chars")
      .required("this field is required")
  });
  
  const handleCreateProject =(values)=>{
    ref.collection("projects").add({...values, created_by:user.email})
    .then(docRef => {
      setProject(docRef.id)
      ref.collection("projects").doc(docRef.id).collection(`${props.title}Assignees`).add({email : user.email ,project_id:docRef.id, role:'creator'})
      ref.collection("projects").doc(docRef.id).update({
        projectAssigneesEmails: firebase.firestore.FieldValue.arrayUnion(user.email )
        })
    })
  }
  const handleCreateBoard =(values)=>{
    var boardDocument = {...values, "project_id" :props.projId} 
    setProject(props.projId)
    ref.collection("projects").doc(props.projId).collection('boards').add(boardDocument)
    .then(docRef => {
     setBoard(docRef.id)
     ref.collection("projects").doc(props.projId).collection('boards').doc(docRef.id).collection(`${props.title}Assignees`).add({email : user.email ,board_id:docRef.id, role:'creator'})
      ref.collection("projects").doc(props.projId).collection('boards').doc(docRef.id).update({
        boardAssigneesEmails: firebase.firestore.FieldValue.arrayUnion(user.email )
        })
    })
  }
  const onSubmit = (values) => {
    (props.title ==='project')?handleCreateProject(values):handleCreateBoard(values);
    setDataSent(1)
  };

  return (
    <section>
      <div className="row getStarted">
        <div className="col-lg-6 mt-4 ms-4">
          <Formik
            initialValues={(props.title ==='project')?projInitialValues:boardInitialValues}
            onSubmit={onSubmit}
            validationSchema={(props.title ==='project')?projValidationSchema:boardValidationSchema}
          >
            {(formik) => {
              return (
                <div className="wrapper fadeInDown">
                  <Form className="form regForm">
                    <div id="formContent">
                      <h2 className="m-4">Create a New {props.title}</h2>
                      <FormikField
                        className="regInput fadeIn"
                        label={props.title}
                        name={props.title}
                        type="text"
                      />
                      {props.subtitle&&
                        <FormikField
                        className="regInput fadeIn"
                        label={props.subtitle}
                        name={props.subtitle}
                        type="text"
                      />}

                      <div className="form_footer mt-5" id="#formFooter">
                      <button className="btns mb-4 mt-4 getstarted_btn" type="submit">Intialize your {props.title}</button>
                      <div className="d-flex justify-content-center">
                      {dataSent && <AssigneesFieldArray project_id={project} board_id={board} name={`${props.title}Assignees`}/>}
                      {dataSent && 
                      
                      <Link to={`/project/${project}`}>
                      <MDBBtn variant="secondary" className="btn-close" color="none" aria-label="Close" />
                        </Link>} 
                        </div>
                    
                        </div>
                   
                    </div>
                  </Form>
                </div>
              );
            }}
          </Formik>
        </div>
        <div className ="col-md-8 col-sm-12 col-lg-4 mt-4 ms-4" >
                          <img className="img-fluid" src={getstarted} alt="Second slide"/>
</div>
      </div>
    </section>
  );
}
export default SpaceCreate;
