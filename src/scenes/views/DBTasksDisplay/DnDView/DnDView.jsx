import React, { useEffect, useState } from "react";
import TaskDetailedCard from './TaskDetailedCard';
import { Modal } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import { Task } from "../../Task/Task";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import firebase from "../../../../firebase/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";
import BoardCard from "./BoardCard";
import ListCard from "./ListCard";
import AddTaskIcon from '@mui/icons-material/AddTask';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import CancelIcon from '@mui/icons-material/Cancel';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import Badge from '@mui/material/Badge';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import "./DnDView.scss";

function DnDView({ currentView, currentProject, currentBoard }) {
  // the add task and board buttons states
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [colShow, setColShow] = useState(false);
  const handleColClose = () => setColShow(false);
  const handleColShow = () => setColShow(true);
  const [taskShow, setTaskShow] = useState(false);
  const handleTaskClose = () => setTaskShow(false);
  const handleTaskShow = () => console.log("clicked");

  const ref = firebase.firestore();
  const user = useSelector((state) => state.user); //State of user
  const tasksQuery =
    user?.uid &&
    currentBoard &&
    ref.collectionGroup("tasks").where("board_id", "==", currentBoard?.id);
  const [tasks] = useCollectionData(tasksQuery, { idField: "id" }); //Get tasks from DB
  const [colsState, setColsState] = useState({}); // Object state to hold value of object of Drag N Drop (Explanied below in useEffect)

  function handleDragEnd(result, columns, setColumns) {
    const { source, destination } = result; //Destruct the result
    if (!destination) return; //Case 1 => the task is droped above nowhere

    if (source.droppableId !== destination.droppableId) {
      //Case 2 => the task is dropped in other column
      const sourceColumn = columns[source.droppableId]; //Select the prev column
      const destColumn = columns[destination.droppableId]; //Select the next column
      const sourceItems = [...sourceColumn.items]; //Get tasks of prev column
      const destItems = [...destColumn.items]; //Get tasks of next column
      const [removed] = sourceItems.splice(source.index, 1); //Remove the task from prev column
      destItems.splice(destination.index, 0, removed); //Add the task to next column
      setColumns({
        //Set the state of columns with new order
        ...columns,
        [source.droppableId]: { ...sourceColumn, items: sourceItems },
        [destination.droppableId]: { ...destColumn, items: destItems },
      });
      //Update the status of the task in DB
      ref
        .collection("projects")
        .doc(currentProject?.id)
        .collection("boards")
        .doc(currentBoard?.id)
        .collection("tasks")
        .doc(result.draggableId)
        .update({ status: destination.droppableId });
    } else {
      //Case 3 => the task is dropped in same column but it change it's order (like prioity)
      const column = columns[source.droppableId]; //Select the prev column
      const copiedItems = [...column.items]; //Get tasks of prev column
      const [removed] = copiedItems.splice(source.index, 1); //Remove the task from prev column
      console.log(result);
      copiedItems.splice(destination.index, 0, removed); //Add the task to same column with the new order
      setColumns({
        ...columns,
        [source.droppableId]: { ...column, items: copiedItems },
      }); //Set the state of columns with new order
    }
  }

  function createColumn() {
    //Get value from input for new column name
    let createColumnValue = document.getElementById("createColumn");
    createColumnValue = createColumnValue.value;
    //Create Deep copy of colsState to add new column
    let renderCols = JSON.parse(JSON.stringify(colsState));
    renderCols[createColumnValue] = {
      id: createColumnValue,
      items: [],
      title: createColumnValue,
    };
    setColsState(renderCols);
    //Update the array of columns with the new column
    ref
      .collection("projects")
      .doc(currentProject?.id)
      .collection("boards")
      .doc(currentBoard?.id)
      .update({
        boardColumns: [...currentBoard?.boardColumns, createColumnValue],
      });
  }
  function deleteCol(col){
    ref
      .collection("projects")
      .doc(currentProject?.id)
      .collection("boards")
      .doc(currentBoard?.id)
      .update({
        boardColumns: currentBoard?.boardColumns.filter((item)=>{return item !== col})
      });
      alert(`${col} has been deleted.`)
  }

  function toggleAccordion(e) {
    if (e.target.classList.contains('list-container__title')) {
        e.target.classList.toggle("active");
        let panel = e.target.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }else if(e.target.tagName === "H4" || e.target.tagName === "SPAN"){
        e.target.parentElement.classList.toggle("active");
        let panel = e.target.parentElement.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }else{
        return
    }

}

  useEffect(() => {
    //DnD library need object with columns name as properties and column object as their's value
    //Every column object have a property of tasks with same status .. and it's rendered in lines below
    if (tasks && currentBoard && currentProject && currentBoard?.boardColumns) {
      const renderCol = {};
      currentBoard?.boardColumns.map((col, index) => {
        const matchTasks = []; //Empty Array to collect all tasks from DB have same status
        tasks.map((task) => {
          if (col.toLowerCase() === task.status.toLowerCase())
            matchTasks.push(task);
        }); //Loop and get all tasks with same status
        renderCol[col] = { id: col, items: matchTasks, title: col }; //Add column object contain it's tasks
      });
      setColsState(renderCol); //Set the special object in dnd to state to update component on every change
    }
  }, [tasks, currentBoard, currentProject]);
  return (
    <div className={`${currentView}s-container`}>
      {/* DragDropContent is wrapper for Droppable => (where columsn render) & Draggable => (where tasks render) and handleDragEnd is the main function of drag and drop */}
      <DragDropContext onDragEnd={(result) => { handleDragEnd(result, colsState, setColsState); }}
      >
        {/* Loop through the object of columns*/}
          {Object.entries(colsState).map(([colId, col], colIndex) => (
            <div className={`${currentView}-container`} key={colIndex}>
               <div className={`${currentView}-container__title ${col.title}-title`} onClick={(e) => { toggleAccordion(e) }}>
                 <h4>{col.title}</h4>
                 
                  <span>
                  {!col.items.length &&  <DeleteSweepIcon className="mx-2 delete-col" onClick={()=>{deleteCol(col.title)}}/>}
                   <Badge className="badge-inner" badgeContent={col.items.length}>
                  <FilterNoneIcon/>
                  </Badge></span></div>
                <Droppable droppableId={colId}>
                {(provided, snapshot) => (
                  // Div below is the div of columns (task container)
                  <div className={`${currentView}-task`} ref={provided.innerRef} {...provided.droppableProps}>
                    {col.items?.map((task, taskIndex) => (
                      <Draggable
                        draggableId={task.id}
                        key={task.id}
                        index={taskIndex}
                      >
                        {
                          // Div below is the div of tasks (Can replace it with a task component)
                          (provided, snapshot) => (
                            <div
                              className={`task`}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              {currentView === "col" && (
                                <BoardCard task={task} currentProject={currentProject}
                                 currentBoard={currentBoard} onDoubleClick={handleTaskShow}/>
                              )}
                              {currentView === "list" && (
                                <ListCard task={task} currentProject={currentProject} currentBoard={currentBoard}/>
                              )}
                            </div>
                          )
                        }
                      </Draggable>
                    ))}
                    {/* The line Below to give space to add task when you hover a task above it */}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
          </DragDropContext>
        {/* </div> */}
        {/* The Input and button to add new columns outside loop to always be last columns */}
        <div>
          {currentBoard && <Button
            className="add-btns addCol text-white"
            variant="primary"
            onClick={handleColShow}
          >
            <span class="tooltiptext">Add a new Status to handle the work flow </span><DashboardCustomizeIcon />
          </Button>}

          <Modal
            show={colShow}
            onHide={handleColClose}
            backdrop="static"
            keyboard={false}
            className="modalCol"
          >
            <Modal.Header>
                <h2>Add a new Progress Status</h2>
                <Button className="close-btn">
                  <CancelIcon onClick={handleColClose}/>
                </Button>
                
            </Modal.Header>
          <Modal.Body>
            {" "}
              <input
                type="text"
                id="createColumn"
                className="form-control"
                placeholder="Enter a new Progress State"
              />
            
            {" "}
          </Modal.Body>
          <Modal.Footer>
          <button onClick={createColumn} className="btn btn-dark">
              <AddTaskIcon /> New State
              </button>
          </Modal.Footer>
        </Modal>
      </div>
        
      
      <div>
        {currentBoard && <Button
          className="add-btns addTask text-white"
          variant="primary"
          onClick={handleShow}
        >
          <span class="tooltiptext">Add a new Task to your board </span><AddTaskIcon />
        </Button>}

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          className="modalTask"
        >
          <Modal.Header>
                <h2>Add a new Task</h2>
                <Button className="close-btn">
                  <CancelIcon onClick={handleClose}/>
                </Button>
                
            </Modal.Header>
          <Modal.Body>
            {" "}
            <Task currentProject={currentProject} currentBoard = {currentBoard}></Task>{" "}
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>
       <div>

          <Modal
            show={taskShow}
            onHide={handleTaskClose}
            backdrop="static"
            keyboard={false}
            className="modalCol"
          >
            <Modal.Header>
                <h2>project :</h2>
                <Button className="close-btn">
                  <CancelIcon onClick={handleTaskClose}/>
                </Button>
                
            </Modal.Header>
          <Modal.Body>
          <TaskDetailedCard />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
export default DnDView;
