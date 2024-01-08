import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import Product from './pages/Product'
import CartPage from './pages/CartPage'

export const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/cart" element={<CartPage />} />
  </Routes>
)
