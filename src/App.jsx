import './App.css';
import Campañas from './components/Campañas/Campañas';
import Community from './components/Community/Community';
import Contacto from './components/Contacto/Contacto';
import Educacion from './components/Educacion/Educacion';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Sobremi from './components/Sobremi/Sobremi';
import Trabajos from './components/Trabajos/Trabajos';

function App() {

  return (
    <>
      < Header />
      < Hero />
      < Sobremi />
      < Trabajos />
      < Campañas />
      < Community />
      < Educacion />
      < Contacto />
    </>
  )
}

export default App