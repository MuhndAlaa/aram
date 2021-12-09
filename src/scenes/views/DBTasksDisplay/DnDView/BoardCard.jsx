import CancelIcon from '@mui/icons-material/Cancel';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import firebase from "../../../../firebase/firebase";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import {useState} from 'react';
import Button from "@restart/ui/esm/Button";
import TaskDetailedCard from './TaskDetailedCard';

const BoardCard = ({currentProject, currentBoard, task }) => {
  const [show, setShowTask] = useState(false);
  const handleCloseTask = () => setShowTask(false);
  const handleShowTask = () => setShowTask(true);
  const ref = firebase.firestore();
  const user = useSelector((state) => state.user); //State of user
  const priority =()=>{
    const yourDate = new Date().toISOString().split('T')[0];
    if(task.status === 'completed'){
      return 'Completed'
    }else{
      if(task.dueDate && task.dueDate === yourDate){
        return 'Urgent'
      }else if(task.dueDate && task.dueDate < yourDate){
        return 'Late'
      }else if(task.dueDate && task.dueDate > yourDate){
          return 'Up-Coming'
      }else if(!task.dueDate){
            return 'No-Due-Date'
      }
    }
  }
  const deleteTask =()=>{
    ref.collection('projects').doc(currentProject.id).collection('boards').doc(currentBoard.id)
    .collection('tasks').doc(task.id).delete();
    alert(`task "${task.title}" has been deleted.`)
  }
  
  return (
    <>
      <div className="task-header">
        <h5 className="task_title"> {task.title}</h5>
        <div>
        <button className="task-info" onClick={handleShowTask}><ReadMoreIcon /></button>
        <Modal
          show={show}
          onHide={handleCloseTask}
          backdrop="static"
          keyboard={false}
          className="modalTask"
        ><Modal.Header>
        <h2>{currentProject.project}</h2>
        <Button className="close-btn">
          <CancelIcon onClick={handleCloseTask}/>
        </Button>
        
    </Modal.Header>
          <Modal.Body>
            <TaskDetailedCard currentProject={currentProject} currentBoard={currentBoard} task={task}/>
          </Modal.Body>
        </Modal>
        <button className="delete-task"><CancelIcon onClick={deleteTask}/> </button></div>
        
      </div>
      <div className="task-content">
        <p className="task_description"> {task.description.slice(0, 30)}...</p>
        <div className={`label ${priority()}-label`}> <span class="tooltiptext">{priority()}</span></div>
      </div>
      
      <div className="task_footer">
        <div className="task_date">{task.dueDate}</div>
        <div className="task_assignees">
          {task.taskAssignees.map((assignee) => (
            <span data-toggle="tooltip" data-placement="top" title={assignee}>
              {assignee[0].toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
export default BoardCard;
