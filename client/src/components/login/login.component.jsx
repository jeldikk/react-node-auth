import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { loginUser } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { useAuthDetailsContext } from "../../hooks/auth-details.hook";

export default function LoginComponent(){
    const authDetails = useAuthDetailsContext();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        const fieldName = event.target.name;

        switch(fieldName){
            case 'username':
                setUsername(value);
                break;
            case 'password':
                setPassword(value);
                break;
        }
    }

    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        const loginResponse = await loginUser(username, password);
        if(loginResponse.status){
            authDetails.updateUser(loginResponse.body)
            navigate("/dashboard")
        }

    }
    return <div>
        <Form onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-3" controlId="loginForm.userName">
                <Form.Label>User Name</Form.Label>
                <Form.Control 
                    type="text"
                    name="username"
                    placeholder="Enter UserName"
                    value={username}
                    onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="loginForm.password">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    name="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={handleInputChange} />
            </Form.Group>
            <div className="d-flex ">
                <Button type="submit" variant="primary">Login</Button>
            </div>
        </Form>
    </div>
}