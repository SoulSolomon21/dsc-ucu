import { Routes, Route, useRoutes } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import SignUpPage from './pages/SignUpPage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
import HomeLayout from "./components/HomeLayout";
import ProtectedLayout  from "./components/ProtectedLayout";

function App() {

  return (
    <Routes>
      <Route element={<HomeLayout />} >
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUpPage />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="profile" element={<ProfilePage />} />
        <Route path="" element={<SettingsPage />} />
      </Route>
    </Routes>
  )
}

export default App
