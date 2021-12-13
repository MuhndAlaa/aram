import { Link } from "react-router-dom"

const TaskView =()=>{
    return(<>
        <Link to="/task">
            <button className="btn btn-danger" style={{position:"absolute", bottom:'100px'}}>ADD NEW TASK</button>
        </Link>
        </>
    )
}
export {TaskView}