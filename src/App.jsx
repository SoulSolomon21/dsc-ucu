import { Routes, Route } from "react-router-dom";
import Welcome from './pages/Welcome/Welcome'
import HomeLayout from "./components/HomeLayout";
import ProtectedLayout  from "./components/ProtectedLayout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
import HomePage from './pages/HomePage/HomePage'
import AdminPage from './pages/AdminPage/AdminPage'
import InfoPage from './pages/InfoPage/InfoPage'
import UserProfile from './pages/UserProfile/UserProfile'

function App() {

  return (
    <Routes>
      <Route element={<HomeLayout />} >
        <Route path="/" element={<Welcome />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="news" element={<InfoPage />} />
        <Route path="adminpage" element={<AdminPage />} />
      </Route>
    </Routes>
  )
}

export default App
