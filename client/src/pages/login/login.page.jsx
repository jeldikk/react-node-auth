import { Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import LoginComponent from "../../components/login/login.component";
import { useAuthDetailsContext } from "../../hooks/auth-details.hook";

export default function LoginPage(){
    const authDetails = useAuthDetailsContext();
    console.log({authDetails});
    if(authDetails.isAuthenticated){
        console.log("you are authenticated")
        return <Navigate to={"/dashboard"} />
    }

    return <Container>
        <h1 className="text-center p-2">Login</h1>
        <LoginComponent />
    </Container>
} 