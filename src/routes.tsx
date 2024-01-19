import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import Product from './pages/Product'

export const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product/:id" element={<Product />} />
  </Routes>
)
