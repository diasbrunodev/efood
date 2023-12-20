import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Italiana } from './pages/Italiana'

export const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/italiana" element={<Italiana />} />
  </Routes>
)
