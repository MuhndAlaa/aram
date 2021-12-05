const ListCard =({task})=>{
    return <>
        <div className="task_title">
            <span>{task.created_by[0].toUpperCase()}</span>
            <h5>{task.title}</h5>
        </div>
        <div className="task_footer">
            <div className="task_date">
                {task.dueDate}
            </div>
            <div className="task_badge">
                {task.status}
            </div>
        </div>
    </>
}
export default ListCard;