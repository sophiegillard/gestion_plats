import { Routes, Route } from 'react-router-dom'
import { GestionPlats } from './pages/GestionPlats.jsx'
import {Home} from "./pages/Home.jsx";
import {GestionFournisseurs} from "./pages/GestionFournisseurs.jsx";

function App() {

  return (

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/GestionDesPlats" element={<GestionPlats />} />
          <Route path="/GestionDesFournisseurs" element={<GestionFournisseurs />} />
      </Routes>
  
  )
}

export default App
