import CancelIcon from '@mui/icons-material/Cancel';
import firebase from "../../../../firebase/firebase";
import { Modal } from "react-bootstrap";
import {useState} from 'react';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import Button from "@restart/ui/esm/Button";
import TaskDetailedCard from './TaskDetailedCard';

const ListCard =({currentProject, currentBoard, task })=>{
    const ref = firebase.firestore();
    const [show, setShowTask] = useState(false);
    const handleCloseTask = () => setShowTask(false);
    const handleShowTask = () => setShowTask(true);

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
      }
    return <>
        <div className="task_title">
            <h5>{task.title}</h5>
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
              </div>
            
        </div>
        <div className="task_footer">
            <div className="task_date">
                {task.dueDate}
            </div>
            <div className={`label ${priority()}-label ps-2`}>
                {priority()}
            </div>
            <button className="delete-task"><CancelIcon onClick={deleteTask}/> </button>
        </div>
    </>
}
export default ListCard;