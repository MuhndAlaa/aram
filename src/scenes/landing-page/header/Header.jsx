import './Header.scss';
import '../../../App.css';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { signOut } from '@firebase/auth';
import { auth } from '../../../firebase/firebase';
import { useDispatch } from 'react-redux';
import { setAuth , setUser } from "../../../redux/userReducer";



const Header = () => {

    //Check wether is user is logged in or not from state mangment
    const isLogged = useSelector(state=>state.auth)
    const dispatch = useDispatch()


    const logout = async ()=>{//Logout Account function
        await signOut(auth)
        //reset user data in state mangment
        dispatch(setAuth(false))
        dispatch(setUser(null))
    }
    return (
    
            <Navbar collapseOnSelect expand="lg" className="navbar">
                <Container>
                    <Link className=" Logo text-white" to="/">ARAM</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ">
                            <Link className="nav-link navLinks text-white mt-2" to="/teams">Teams</Link>
                            <Link className="nav-link navLinks text-white mt-2" to="/pricing">Pricing</Link>
                            <Link className="nav-link  navLinks text-white mt-2" to="/counter">Counter</Link>
                            <Link className="nav-link navLinks text-white mt-2">Features</Link>
                        </Nav>
                        <Nav className="btns">
                                {!isLogged ?
                                <>
                                    <Link to="/login" className="navBtns ">Login</Link>
                                    <Link to="/register" className="navBtns ms-2">Register</Link>
                                </> 
                                : 
                                <>
                                <Link to="/" onClick={logout} className="navBtns ms-2">LogOut</Link>
                                </> }
                                
                                
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    
    )
}
export { Header }