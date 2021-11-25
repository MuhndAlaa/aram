function TasksDisplay({ currentProject, currentBoard }) {
    return (
        <>
            <h4 className='tasks-display text-black' >for the views components to be diplayed</h4>
            <h4 className='tasks-display text-black' >Current Project is: {currentProject}</h4>
            <h4 className='tasks-display text-black' >Current Board is: {currentBoard}</h4>
        </>
    )
}
export default TasksDisplay;