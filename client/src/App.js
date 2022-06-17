import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Settings from './Pages/Settings'
import Single from './Pages/Single'
import Write from './Pages/Write'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Context } from './context/Context'
import { useContext } from 'react'

function App() {
  const { user } = useContext(Context)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={user ? <Home /> : <Login />} />
        <Route path='/register' element={user ? <Home /> : <Register />} />
        <Route path='/settings' element={user ? <Settings /> : <Register />} />
        <Route path='/post/:postId' element={<Single />} />
        <Route path='/write' element={user ? <Write /> : <Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
