import Button from "@restart/ui/esm/Button"
import { useState } from "react"
import { Modal } from "react-bootstrap";
import SideBar from '../SideBar/SideBar';
import TaskDisplay from '../DBTasksDisplay/TasksDisplay'
import { Task } from "../Task/Task"
import './dashboard.scss'

const Dashboard = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <SideBar />
            <TaskDisplay />
            <div>
                <Button className="addTask text-white" variant="primary" onClick={handleShow}>
                    +Task
                </Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    className="modalTask"
                >
                    <Modal.Body>
                        <Task></Task>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="closeBtn" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}
export default Dashboard;