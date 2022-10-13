import Navbar from './components/Navbar'
import Signin from './pages/Signin'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { AuthContextProvider } from './context/AuthContext'
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import AddProduct from './pages/AddProduct';
import Signup from './pages/Signup';
function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </>
  )
}

export default App
