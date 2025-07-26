import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:id" element={<Profile />} />
  </Routes>
)

export default Rotas
