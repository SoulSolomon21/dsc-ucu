import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate, Link, Outlet } from "react-router-dom";

function HomeLayout() {

  const { user } = useAuth()

  if (user) {
    return <Navigate to='/dashboard/profile' />
  }

  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default HomeLayout