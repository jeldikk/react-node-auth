// import styles from "./header.module";
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap"
import { Link } from "react-router-dom"
import { useAuthDetailsContext } from "../../hooks/auth-details.hook";

export default function Header(){

    const authDetails = useAuthDetailsContext();

    return <header>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">LTIM K8s</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link>
                            <Link to="/">Home</Link>
                        </Nav.Link>
                        {authDetails.isAuthenticated ? 
                            <>
                                <Nav.Link>
                                    <Link to="/dashboard">Dashboard</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/clusters">Clusters</Link>
                                </Nav.Link>
                            </> : null}
                        <Nav.Link>
                            <Link to="/about">About</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/register">Register</Link>
                        </Nav.Link>
                        {authDetails.isAuthenticated ? <Nav.Link onClick={() => authDetails.logout()}>
                            Logout
                        </Nav.Link> : <Nav.Link>
                            <Link to="/login">Login</Link>
                        </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
}