import { Link } from "react-router-dom"

const TaskView =()=>{
    return(
        <Link to="/task">
            <button className="btn btn-danger">ADD NEW TASK</button>
        </Link>
    )
}
export {TaskView}