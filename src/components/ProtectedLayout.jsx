import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Outlet, Navigate, Link } from "react-router-dom";

function ProtectedLayout() {
    const { user } = useAuth()

    if (!user) {
        return <Navigate to='/' />
    }

    return (
        <div>
            <nav>
                <Link to='/settings'>Settings</Link>
                <Link to='/profile'>Profile</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default ProtectedLayout