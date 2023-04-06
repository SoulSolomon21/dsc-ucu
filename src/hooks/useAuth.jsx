import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useLocalStorage } from "./useLocalStorage";
import { useMyApi } from "./useApi";
const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    // const [user, setUser] = useLocalStorage("user", null)
    const [myUser,setMyUser] = useMyApi()
    const navigate = useNavigate()

    const login = async (data) => {
        // setUser(data)
        setMyUser(data)
        navigate('/profile')
    }

    const logout = () => {
        // setUser(null)
        setMyUser(null)
        navigate('/', { replace: true })
    }

    const value = useMemo(
        () => ({
            myUser,
            user,
            login,
            logout
        }),
        [user]
    )

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}