import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate, Link, Outlet } from "react-router-dom";
// import Navbar from './Navbar'
import { AppBar, Toolbar, Typography, Button, } from '@mui/material';

function HomeLayout() {

  const { user } = useAuth()

  if (user) {
    return <Navigate to='/dashboard/home' />
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/signin">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </div>
  )
}

export default HomeLayout