import { Button, Col, Form, Row } from "react-bootstrap";

export default function RegisterComponent(){

    const registerHandler = (event) => {
        event.preventDefault();

        const payload = {
            firstName: 'Kamal', 
            lastName: "Jeldi", 
            email: 'jeldikk@mail.com', 
            username: 'jeldikk', 
            password: 'password123', 
            confirmPassword: 'password123'
        }

        fetch("/api/v1/auth/register", {
            method: 'POST',
            body: JSON.stringify(payload)
        })
        .then((res) => res.json())
        .then((body) => {
            console.log({body})
        })
    }

    return (<Form onSubmit={registerHandler}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="registerForm.firstName">
                    <Form.Label className="fw-bold">First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" />
                </Form.Group>
                <Form.Group as={Col} controlId="registerForm.lastName">
                    <Form.Label className="fw-bold">Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" />
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="registerForm.userName">
                <Form.Label className="fw-bold">User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter UserName" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="registerForm.email">
                <Form.Label className="fw-bold">Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="registerForm.password">
                    <Form.Label className="fw-bold">Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>
                <Form.Group as={Col} controlId="registerForm.confirmPassword">
                    <Form.Label className="fw-bold">Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
            </Row>
            <div className="d-flex ">
                <Button type="submit" variant="primary">Register</Button>
            </div>
        </Form>)
}