import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    const login = async (data) => {
        await axios.post('https://web-takehome-production.up.railway.app/api/signin', data).then(function (response) {
            console.log(response)
            if (response.data.memberData) {
                alert("Successfully Signed In")
                setUser(response.data.memberData._doc)
                navigate('/dashboard/home')
            } else {
                console.log("Incorrect Username and password")
                alert("Incorrect Username and password")
            }
        })
    }

    const logout = () => {
        setUser(null)
        navigate('/', { replace: true })
    }

    const value = useMemo(
        () => ({
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