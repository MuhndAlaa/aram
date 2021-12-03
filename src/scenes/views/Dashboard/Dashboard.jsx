import { useState } from "react";
import TasksDisplay from "../DBTasksDisplay/TasksDisplay";
import "./dashboard.scss";
import firebase from "../../../firebase/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import MiniDrawer from "../Sidenavbar/Sidenavbar";

const Dashboard = () => {

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
  useEffect(() => {}, [user, assigneeProjects, boards , currentBoard]);
  return (
    <div className="d-flex view-container">
      <MiniDrawer
        className="db-sideBar"
        assigneeProjects={assigneeProjects}
        boards={boards}
        setCurrentProject={setCurrentProject}
        setCurrentBoard={setCurrentBoard}
      />
      <div className="db-view">
        <TasksDisplay
          currentProject={currentProject}
          currentBoard={currentBoard}
        />

      </div>
    </div>
  );
};
export default Dashboard;
