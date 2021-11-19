import './Header.scss';
import '../../../App.css';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
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
                                <Link to="/login" className="navBtns ">Login</Link>
                                <Link to="/register" className="navBtns ms-2">Register</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    
    )
}
export { Header }