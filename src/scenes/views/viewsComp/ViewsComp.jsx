import Button from "@restart/ui/esm/Button"
import { useState } from "react"
import { Modal } from "react-bootstrap"
import { BiChevronDown, BiCollection, BiGridAlt, BiHomeSmile } from "react-icons/bi"
import { Link } from "react-router-dom"
import { Task } from "../Task/Task"
import './ViewsComp.scss'

const ViewsComp = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div>
                <div className="viewsSection ">

                    <div class="sidebar close">
                        <ul className="nav-links">
                            <li>
                                <Link className="nav-links-item" to="/viewhome">
                                    <BiHomeSmile className="link-icon"></BiHomeSmile>
                                    <span className="link-name" >Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-links-item" to="/notification">
                                    <BiHomeSmile className="link-icon"></BiHomeSmile>
                                    <span className="link-name" >Notification</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="nav-links-item">
                                    <BiGridAlt className="link-icon"></BiGridAlt>
                                    <span className="link-name">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <div className="iconLink">
                                    <Link href="#" className="nav-links-item">
                                        <BiCollection className="link-icon"></BiCollection>
                                        <span className="link-name">Tickets</span>
                                    </Link>
                                    <BiChevronDown className="link-icon arrow"></BiChevronDown>
                                </div>
                                <ul className="sub-menu">
                                    <li><Link className="link-name">Tickets</Link></li>
                                    <li><Link className="sub-menu-link">Projects</Link></li>
                                    <li><Link className="sub-menu-link" to="/taskview">Tasks</Link></li>
                                    <li><Link className="sub-menu-link">Board</Link></li>
                                </ul>
                            </li>
                            {/* <li>
            <div className="iconLink">
                <Link href="#" className="nav-links-item">
                    <BiBookAlt className="link-icon"></BiBookAlt> 
                    <span className="link-name">Posts</span>
                </Link>
                <BiChevronDown className="link-icon arrow"></BiChevronDown>
            </div>
            <ul className="sub-menu">
                <li><Link className="link-name">Posts</Link></li>
                <li><Link className="sub-menu-link">Projects</Link></li>
                <li><Link className="sub-menu-link">List</Link></li>
                <li><Link className="sub-menu-link">Board</Link></li>
            </ul>
        </li> */}

                        </ul>
                    </div>
                </div>
            </div>
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
export { ViewsComp }