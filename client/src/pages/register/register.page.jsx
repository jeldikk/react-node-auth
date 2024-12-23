import { Container } from "react-bootstrap";
import RegisterComponent from "../../components/register/register.component";

export default function RegisterPage(){
    return <Container>
        <h1 className="text-center p-2">Register</h1>
        <RegisterComponent />
    </Container>
}