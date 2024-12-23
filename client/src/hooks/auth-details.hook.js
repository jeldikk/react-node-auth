import { useContext } from "react";
import { AuthDetailsContext } from "../context/auth-details.context";

export function useAuthDetailsContext(){
    const authDetails = useContext(AuthDetailsContext);

    if(!authDetails){
        throw new Error("you should use useAuthDetailsContext only in concerned provider");
    }

    return authDetails;
}