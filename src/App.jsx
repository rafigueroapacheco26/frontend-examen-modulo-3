import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ListaProductos from './components/ListaProductos';
import FormularioProducto from './components/FormularioProducto';
import BotonClaroOscuro from './components/boton-claro-oscuro/BotonClaroOscuro';

function App() {
  const [isDark, setIsDark] = useState(() =>
    window.matchMedia?.("(prefers-color-scheme: dark)").matches
  );
  
  return (
    <div className="d-flex flex-column justify-content-between min-vh-100" data-bs-theme={isDark ? "dark" : "light"}>
      <BotonClaroOscuro setTema={setIsDark} />
      <ListaProductos />
    </div>
  )
}

export default App
