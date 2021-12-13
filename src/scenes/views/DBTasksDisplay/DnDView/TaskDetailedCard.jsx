import firebase from "../../../../firebase/firebase";
import "./TaskDetailedCard.scss";

const TaskDetailedCard = ({currentProject, currentBoard, task, handleCloseTask }) => {
  const ref = firebase.firestore();
  
  const handleDone =()=>{
    ref
        .collection("projects")
        .doc(currentProject?.id)
        .collection("boards")
        .doc(currentBoard?.id)
        .collection("tasks")
        .doc(task?.id)
        .update({ status: "completed"});
        handleCloseTask();
  }
  return (
    <>
      <div className="task-container">
        <div className="task-header">
          <div className="task-header_sources">
            <h6>Board</h6>
            <h4>{currentBoard.board}</h4>
          </div>
        </div>
        <div className="task-info">
            <div className="task-info_flex">
                <h4>{task.title}</h4>
            </div>
            <p>Created :</p>
            <div className="task-info_flex">
              <p>{task.created_at.toDate().toLocaleDateString('en-US')}</p>
              <p>{task.created_at.toDate().toLocaleTimeString('en-US')}
              </p>
                <div className="task_assignees">
                  <p className="m-0 me-2">By </p>
                    <span data-toggle="tooltip" data-placement="top" title={task.created_by}>
                   {task.created_by[0].toUpperCase()}
                    </span>
                </div>
                
            </div>
            <div className="task-info_flex">
                <div>
                  <h6>details : </h6>
                <h5>{task.description}</h5>
                </div>
            </div>
            <div className="task-info_flex">
                <div className="task_assignees">
                  {task.taskAssignees.map((assignee) => (
                    <span data-toggle="tooltip" data-placement="top" title={assignee}>
                      {assignee[0].toUpperCase()}
                    </span>
                  ))}
                </div>
                <div className="task-info_status">{task.dueDate}</div>
            </div>
            <div className="task-info_flex">
                <div className="task-info_status">{task.status}</div>
                <button className="btn" onClick={handleDone}>Mark as Done</button>
            </div>
            
        </div>
        
      </div>

      <div className="floating-text">
        Made by #ARAM Team
      </div>
    </>
  );
};
export default TaskDetailedCard;
