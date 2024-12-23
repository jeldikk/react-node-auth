// import styles from "./header.module";
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap"
import { Link } from "react-router-dom"
export default function Header(){
    
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
                        <Nav.Link>
                            <Link to="/dashboard">Dashboard</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/about">About</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/login">Login</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/register">Register</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
}