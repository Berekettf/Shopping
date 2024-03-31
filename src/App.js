import React from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Product from './pages/Products'
import Footer from './components/footer/Footer'
import mb from './components/assets/men3.svg'
import wb from './components/assets/kids.svg'
import kb from './components/assets/kids1.svg'


const App = () => {
  return (
   <>
   <BrowserRouter>
     <Navbar/>
     <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory banner={mb} category="men"/>}/>
          <Route path='/womens' element={<ShopCategory banner={wb} category="women"/>}/>
          <Route path='/kids' element={<ShopCategory banner={kb} category="kid"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=":productId" element={Product}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
      <Route/>
     </Routes>
     <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App
