import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { registerUser } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

export default function RegisterComponent(){

    let navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        switch(name){
            case 'firstName':
                setFirstName(value);
                break;
            case 'lastName':
                setLastName(value);
                break;
            case 'username':
                setUsername(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'confirmPassword':
                setConfirmPassword(value);
                break;
        }
    }

    const registerHandler = (event) => {
        event.preventDefault();

        const payload = {
            firstName, 
            lastName,
            email,
            username,
            password,
            confirmPassword,
        }

        registerUser(payload)
        .then((details) => {
            console.log({details})
            if(details.status){
                navigate('/dashboard')
            }
        })
    }

    return (<Form onSubmit={registerHandler}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="registerForm.firstName">
                    <Form.Label className="fw-bold">First Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="firstName" 
                        placeholder="Enter First Name" 
                        value={firstName} 
                        onChange={handleInputChange} 
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="registerForm.lastName">
                    <Form.Label className="fw-bold">Last Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="lastName"
                        placeholder="Enter Last Name"
                        value={lastName}
                        onChange={handleInputChange} 
                    />
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="registerForm.userName">
                <Form.Label className="fw-bold">User Name</Form.Label>
                <Form.Control 
                    required
                    type="text" 
                    name="username"
                    placeholder="Enter UserName"
                    value={username}
                    onChange={handleInputChange} 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="registerForm.email">
                <Form.Label className="fw-bold">Email</Form.Label>
                <Form.Control 
                    required
                    type="email" 
                    name="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={handleInputChange} />
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="registerForm.password">
                    <Form.Label className="fw-bold">Password</Form.Label>
                    <Form.Control 
                        required
                        type="password" 
                        name="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="registerForm.confirmPassword">
                    <Form.Label className="fw-bold">Confirm Password</Form.Label>
                    <Form.Control 
                        required
                        type="password" 
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={handleInputChange} 
                    />
                </Form.Group>
            </Row>
            <div className="d-flex ">
                <Button type="submit" variant="primary">Register</Button>
            </div>
        </Form>)
}