import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import NoPage from './Components/NoPage'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard/:id' element={<Dashboard />} />



          <Route path='/*' element={<NoPage/>} />

        </Routes>
      </Router>
     
    </div>
  )
}

export default App