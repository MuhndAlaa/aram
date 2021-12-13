import './Navigation.scss';
import '../../../App.scss';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { signOut } from '@firebase/auth';
import { auth } from '../../../firebase/firebase';
import { useDispatch } from 'react-redux';
import { setAuth, setUser } from "../../../redux/userReducer";



const Navigation = () => {

    //Check wether is user is logged in or not from state mangment
    const isLogged = useSelector(state => state.auth)
    const dispatch = useDispatch()


    const logout = async () => {//Logout Account function
        await signOut(auth)
        //reset user data in state mangment
        dispatch(setAuth(false))
        dispatch(setUser(null))
    }
    return (

        <Navbar collapseOnSelect expand="lg" className="navbar py-1">
            <Container>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
                    <Link className="Logo" to="/">A<p className="logo-r">R</p>AM</Link>
                    <Nav>
                        <a className="nav-link navLinks mt-2" href="#services">Servies</a>
                        <a className="nav-link navLinks mt-2" href="#devices">Devices</a>
                        <a className="nav-link navLinks mt-2" href="#team">Team</a>
                        <a className="nav-link navLinks mt-2" href="#pricing">Pricing</a>
                        <a className="nav-link navLinks mt-2" href="#contact">Contact US</a>
                    </Nav>
                    <Nav className="btns">
                        {!isLogged ?
                            <>
                                <Link to="/login" className="navBtns ">Login</Link>
                                <Link to="/register" className="navBtns ms-2">Register</Link>
                            </>
                            :
                            <>
                                <Link to="/dashboard" className="navBtns ms-2">My Dashboard</Link>
                                <Link to="/" onClick={logout} className="navBtns ms-2">LogOut</Link>
                            </>}


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
export { Navigation }