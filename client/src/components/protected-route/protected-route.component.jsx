import { Navigate } from "react-router-dom";
import { useAuthDetailsContext } from "../../hooks/auth-details.hook";

export default function ProtectedRoute({children}){
    const authDetails = useAuthDetailsContext();

    if(!authDetails.isAuthenticated){
        console.log("Not Authenticated");
        return <Navigate to="/login" />
    }

    return children;
}