import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import SideBar from "../SideBar/SideBar";
import TaskDisplay from "../DBTasksDisplay/TasksDisplay";
import { Task } from "../Task/Task";
import "./dashboard.scss";
import firebase from "../../../firebase/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import MiniDrawer from "../Sidenavbar/Sidenavbar";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Declare current project and current board
  const [currentProject, setCurrentProject] = useState();
  const [currentBoard, setCurrentBoard] = useState();

  //Declare firebase
  const ref = firebase.firestore();
  const user = useSelector((state) => state.user); //State of user

  //Getting assigneed projects from db
  const assigneeQuery =
    user?.uid &&
    ref
      .collection("projects")
      .where("projectAssigneesEmails", "array-contains", user.email);
  const [assigneeProjects] = useCollectionData(assigneeQuery, {
    idField: "id",
  });

  //Getting assigneed boards from db
  const boardsQuery =
    user?.uid &&
    ref
      .collectionGroup("boards")
      .where("boardAssigneesEmails", "array-contains", user.email);
  const [boards] = useCollectionData(boardsQuery, { idField: "id" });

  //To update component with live owned projects and assigned projects
  useEffect(() => {}, [user, assigneeProjects, boards]);
  return (
    <div className="d-flex">
      <MiniDrawer
        assigneeProjects={assigneeProjects}
        boards={boards}
        setCurrentProject={setCurrentProject}
        setCurrentBoard={setCurrentBoard}
      />
      <div>
        <TaskDisplay
          currentProject={currentProject}
          currentBoard={currentBoard}
        />

        <div>
          <Button
            className="addTask text-white"
            variant="primary"
            onClick={handleShow}
          >
            +Task
          </Button>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            className="modalTask"
          >
            <Modal.Body>
              {" "}
              <Task></Task>{" "}
            </Modal.Body>
            <Modal.Footer>
              <Button className="closeBtn" onClick={handleClose}>
                {" "}
                Close{" "}
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
