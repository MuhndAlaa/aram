const BoardCard = ({ task }) => {
  return (
    <>
      <h5 className="task_title"> {task.title}</h5>
      <p className="task_description"> {task.description.slice(0, 30)}...</p>
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
