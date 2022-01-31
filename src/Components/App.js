import React from 'react'
import Signup from './Signup'
import Login from './Login'
import Dashboard from './Dashboard'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'

function App () {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route path='/update-profile' element={<UpdateProfile />} />
          <Route path='/signup' caseSensitive={false} element={<Signup />} />
          <Route exact path='/' caseSensitive={false} element={<Dashboard />} />
          <Route path='/login' caseSensitive={false} element={<Login />} />
          <Route path='/forgot-password' component={ForgotPassword} />
        </Routes>
      </AuthProvider>
    </Router>

  )
}

export default App
