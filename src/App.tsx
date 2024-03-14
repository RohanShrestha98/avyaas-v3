import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import BaseLayout from './layouts/BaseLayout'
import Users from './pages/users/Users'
import Instructor from './pages/instructors/Instructor'
import Login from './pages/auth/login'
import AuthLayout from './layouts/AuthLayout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
        </Route>
        <Route element={<BaseLayout />}>
          <Route path='/' element={<></>} />
          <Route path='/users' element={<Users />} />
          <Route path='/instructors' element={<Instructor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
