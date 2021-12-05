import CancelIcon from '@mui/icons-material/Cancel';
import firebase from "../../../../firebase/firebase";
import { useSelector } from "react-redux";

const ListCard =({currentProject, currentBoard, task })=>{
    const ref = firebase.firestore();
     const user = useSelector((state) => state.user); //State of user
    const priority =()=>{
        const yourDate = new Date().toISOString().split('T')[0];
    
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
    const updateDueDate=()=>{

    }
    const deleteTask =()=>{
        ref.collection('projects').doc(currentProject.id).collection('boards').doc(currentBoard.id)
        .collection('tasks').doc(task.id).delete();
      }
    return <>
        <div className="task_title">
            <span>{task.created_by[0].toUpperCase()}</span>
            <h5>{task.title}</h5>
        </div>
        <div className="task_footer">
            <div className="task_date">
                {task.dueDate}
            </div>
            <div className={`label ${priority()}-label ps-2`} onclick={updateDueDate}>
                {priority()}
            </div>
            <button className="delete-task"><CancelIcon onClick={deleteTask}/> </button>
        </div>
    </>
}
export default ListCard;