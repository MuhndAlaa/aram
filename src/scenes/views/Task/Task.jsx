import './Task.scss';
import Button from "@restart/ui/esm/Button";
import { MdDateRange } from "react-icons/md";
import { ImAttachment } from "react-icons/im";
import { BiUserPlus } from "react-icons/bi";
import { useState } from "react";
import { Form, Formik } from "formik";
import FieldArrayInput from "./FieldArray";
import firebase from "../../../firebase/firebase";
import { useSelector } from "react-redux";

const Task = ({currentBoard, currentProject, handleClose}) => {
  const ref = firebase.firestore();
  const user = useSelector(state=>state.user)

  const initialValues = {
    title: "",
    description: "",
    status: "TODO",
    fileAttach: "",
    dueDate: "",
    dueTime: '',
    created_by: user.email,
    created_at:firebase.firestore.Timestamp.now(), 
    taskAssignees: [],
  };
  function addTask(values){
    ref.collection("projects").doc(currentProject.id).collection('boards').doc(currentBoard.id).collection('tasks').add({...values,board_id:currentBoard.id})
    handleClose()
  }
  const onSubmit = (values) => {addTask(values)};
  const [cardForm, setCardForm] = useState(false);
  const [assignForm, setAssignForm] = useState(false);
  const [dueDate, setDueDate] = useState(false);

  const attachFile = () => {
    setCardForm(!cardForm);
  };
  const assigningTask = () => {
    setAssignForm(!assignForm);
  };
  const DueDate = () => {
    setDueDate(!dueDate);
  };

  return (
    <section className="mt-5">
      <div className="Task-header">
        <h2 className="newTask">Add New Task</h2>
      </div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(formik) => {
          return (
            <Form>
              <div className="form-group mb-3">
                <label className="label ">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  placeholder="Task Title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                ></input>
              </div>
              <div className="form-group mb-5">
                <label className="label">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  placeholder="Task Description"
                  onChange={formik.handleChange}
                  value={formik.values.descriptions}
                ></input>
              </div>
              <div className="form-group mb-5">
                <label className="label me-4">Status of The Task</label>
                <select
                  name="status"
                  value={formik.values.status}
                  onChange={formik.handleChange}
                >
                  <option value="TODO" label="Pick Task Status" />
                  <option value="TODO" label="Not Opened" />
                  <option value="inReview" label="In Review" />
                  <option value="PROGRESS" label="In Progress" />
                  <option value="COMPLETED" label="Completed" />
                </select>
              </div>

              <div className="task-items">
                <li
                  className="text-muted task-items-wrapper"
                  onClick={attachFile}
                >
                  <ImAttachment className="icon"></ImAttachment>
                  File Attachment
                </li>
                <li className="task-items-wrapper text-muted" onClick={DueDate}>
                  <MdDateRange className="icon" />
                  Due Time
                </li>
                <li
                  className="task-items-wrapper text-muted"
                  onClick={assigningTask}
                >
                  <BiUserPlus className="icon" />
                  Assigned for
                </li>
              </div>
              <div>
                {cardForm && (
                  <div className="task-items-field">
                    <input
                      type="file"
                      name="fileAttach"
                      id="fileAttach"
                      onChange={formik.handleChange}
                      value={formik.values.fileAttach}
                    />
                  </div>
                )}
              </div>
              {dueDate && (
                <div className="task-items-field">
                  <div className="my-2">
                    <label className="label">
                      choose The Date:
                    </label>

                    <input
                      type="date"
                      step="1"
                      id="date"
                      name="dueDate"
                      placeholder="2021-11-30"
                      min="2021-01-01"
                      max="2025-12-31"
                      onChange={formik.handleChange}
                      value={formik.values.dueDate}
                    ></input>
                  </div>
                  <div className="my-2">
                    <label className="label">
                      choose The Time:
                    </label>

                    <input
                      type="time"
                      step="1"
                      id="time"
                      name="dueTime"
                      placeholder="00-00-00"
                      onChange={formik.handleChange}
                      value={formik.values.dueTime}
                    ></input>
                  </div>
                </div>
              )}
              {assignForm && <div className="task-items-field"><FieldArrayInput name="taskAssignees" /></div>}
              <Button className="addBtn mt-5" type="submit">
                ADD TASK
              </Button>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};
export {Task};
