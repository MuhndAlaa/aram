import CancelIcon from '@mui/icons-material/Cancel';
import firebase from "../../../../firebase/firebase";
import { useSelector } from "react-redux";

const BoardCard = ({currentProject, currentBoard, task }) => {
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
  }
  
  return (
    <>
      <div className="task-header">
        <h5 className="task_title"> {task.title}</h5>
        <button className="delete-task"><CancelIcon onClick={deleteTask}/> </button>
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
