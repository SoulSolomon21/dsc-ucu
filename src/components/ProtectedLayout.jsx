import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Outlet, Navigate, Link } from "react-router-dom";
// import Navbar from './Navbar';
import { AppBar, Toolbar, Typography, Button, } from '@mui/material';

function ProtectedLayout() {
    const { user,logout } = useAuth()

    if (!user) {
        return <Navigate to='/' />
    }

    const handleLogOut = () => {
        logout()
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" component={Link} to="/dashboard/home">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/dashboard/profile">
                        Profile
                    </Button>
                    <Button color="inherit" component={Link} to="/dashboard/news">
                        News
                    </Button>
                    {user.role === 'admin' && (
                        <Button color="inherit" component={Link} to="/dashboard/adminpage">
                            Admin
                        </Button>
                    )}
                    <Button onClick={handleLogOut} color="inherit" component={Link} to="/">
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
            <Outlet />
        </div>
    )
}

export default ProtectedLayout