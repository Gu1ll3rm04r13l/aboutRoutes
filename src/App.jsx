import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contacto from './pages/Contacto'
import Beer from './Beer'
import Layout from './Layout/Layout'
import './App.css'

function App() {
  return (
    <div>
      <h1>Mas que solo bebidas, festejemos el encuentro.</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/home' element={<Home />} />
            <Route path='/beer/:id' element={<Beer />} />
            <Route path='/contact' element={<Contacto />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
