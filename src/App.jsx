import { Routes, Route } from 'react-router-dom'
import { GestionPlats } from './pages/GestionPlats.jsx'
import {Home} from "./pages/Home.jsx";

function App() {

  return (

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/GestionDesPlats" element={<GestionPlats />} />
      </Routes>
  
  )
}

export default App
