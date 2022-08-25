import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import SimpleSlider from './Layout/Banner'
import Header from './Layout/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

// import Products from './pages/Product'
import Register from './pages/Register'
import Protected from './Routing/Protected'
function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          {/* <Products/> */}
          {/* <SimpleSlider/> */}
   
          <Routes>
          <Route
              path="/dashboard"
              element={<Protected Component={Dashboard} />}
            />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
