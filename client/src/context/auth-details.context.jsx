import { createContext, useEffect, useState } from "react";
import { loginUser, logoutUser } from "../services/auth.service";
import { useNavigate } from "react-router-dom";

/**
 * isAuthenticated: boolean
 * user: {username: string, email: string, id: string} | null
 */


export const AuthDetailsContext = createContext({
    loading: false,
    isAuthenticated: false,
    user: null,
    login: async () => {},
    logout: async () => {},
    updateUser: (user) => {}
});


export function AuthDetailsContextProvider({children}){
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     // if(user && Object.keys(user).length > 0){
    //     //     setIsAuthenticated(true)
    //     // }
    //     if(user === null){
    //         setIsAuthenticated(false)
    //     }
    //     else{
    //         setIsAuthenticated(true)
    //     }
    // }, [user])

    const login = async (username, password) => {
        const {ok, body} = await loginUser(username, password);
    };

    const logout = async () => {
        const logoutRes = await logoutUser();
        if(logoutRes.status){
            updateUser(null);
            navigate('/')
        }
    };

    const updateUser = (user) => {
        // if(user && Object.keys(user).length > 0){
        //     setUser(user);
        // }
        // else if(user === null){
        //     setUser(null);
        // }

        if(user === null){
            setUser(null);
            setIsAuthenticated(false)
        }
        else{
            setUser(user);
            setIsAuthenticated(true);
        }
    }

    return <AuthDetailsContext.Provider value={{loading, isAuthenticated, user, login, logout, updateUser}}>
        {children}
    </AuthDetailsContext.Provider>
}