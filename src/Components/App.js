import React from 'react'
import Signup from './Signup'
import Login from './Login'
import Dashboard from './Dashboard'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App () {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/signup' caseSensitive={false} element={<Signup />} />
          <Route exact path='/' caseSensitive={false} element={<Dashboard />} />
          <Route path='/login' caseSensitive={false} element={<Login />} />
        </Routes>
      </AuthProvider>
    </Router>

  )
}

export default App
