import { useEffect, useState } from "react"
import Producto from "./Producto"
import { Container } from "reactstrap"
import BotonMostrarFormulario from "./BotonMostrarFormulario"
const VITE_API_URL = import.meta.env.VITE_API_URL

export default function ListaProductos() {

  const [productos, setProductos] = useState([])

  async function obtenerListaProductos() {
    const response = await fetch(`${VITE_API_URL}/api/productos`)
    const data = await response.json()
    setProductos(data)
  }

  useEffect(() => {
    obtenerListaProductos()
    setInterval(() => {
      obtenerListaProductos()
    }, 5000)
    return () => clearInterval(obtenerListaProductos)
  }, [])

  return (
    <div className="container mt-4">
      <h1>Lista de Productos</h1>
      <hr />

      <BotonMostrarFormulario actualizarProductos={obtenerListaProductos} />

      <div className="container mt-4 d-flex flex-row flex-wrap gap-3">
        {productos && productos.map(producto => (
          <Producto key={producto.id} nombre={producto.nombre} precio={producto.precio} />
        ))}
      </div>
    </div>
  )

}