import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ListaProductos from './components/ListaProductos';
import FormularioProducto from './components/FormularioProducto';

function App() {
  const [isDark, setIsDark] = useState(() =>
    window.matchMedia?.("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = (e) => setIsDark(e.matches);

    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  }, []);

  return (
    <div className="d-flex flex-column justify-content-between min-vh-100" data-bs-theme={isDark ? "dark" : "light"}>
      <ListaProductos />
    </div>
  )
}

export default App
