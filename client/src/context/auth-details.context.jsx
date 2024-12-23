import { createContext, useEffect, useState } from "react";
import { loginUser, logoutUser, validateUser } from "../services/auth.service";
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

    useEffect(() => {
        setLoading(true)
        validateUser()
            .then((data) => {
                if(data.status){
                    setIsAuthenticated(true)
                    setUser(data.body)
                }
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

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