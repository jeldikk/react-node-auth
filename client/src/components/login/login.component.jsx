import { Form, Button } from "react-bootstrap";

export default function LoginComponent(){
    return <div>
        <Form>
            <Form.Group className="mb-3" controlId="loginForm.userName">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter UserName" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="loginForm.password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
            <div className="d-flex ">
                <Button type="submit" variant="primary">Login</Button>
            </div>
        </Form>
    </div>
}