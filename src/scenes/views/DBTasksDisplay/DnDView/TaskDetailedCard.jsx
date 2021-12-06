import "./TaskDetailedCard.scss";

const TaskDetailedCard = ({task}) => {
  return (
    <>
      <div class="task-container">
        <div class="task-header">
          <div class="task-header_sources">
            <h6>Board</h6>
            <h4>board.board</h4>
          </div>
        </div>
        <div class="task-info">
            <div className="task-info_flex">
                <div><h6>Task : </h6>
                <h4>task.title</h4>
                </div>
                <div className="task-info_status">task.status</div>
            </div>
            <div className="task-info_flex">
                <div><h6>details : </h6>
                <h5>task.description</h5>
                </div>
                <div className="task-info_status">task.dueDate</div>
            </div>
            <div className="task-info_flex">
                <div className="assignees"></div>
                <button class="btn">Mark as Done</button>
            </div>
            
        </div>
        
      </div>

      <div class="floating-text">
        Made by #ARAM Team
      </div>
    </>
  );
};
export default TaskDetailedCard;
