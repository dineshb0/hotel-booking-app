import Hero from "./Hero"
import Register from "./Register"
import Login from "./Login"
import Home from "./Home"
import Booking from "./Booking"
import Somethingwrong from "./Somethingwrong"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Hero/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path='/somethingwrong' element={<Somethingwrong/>}/>
        <Route path="/booking" element={<Booking/>}/>
      </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  )
}

export default App
