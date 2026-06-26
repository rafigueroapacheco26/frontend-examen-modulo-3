import { useState } from "react"
import Alert from "./alert/Alert"
import { IoMdAddCircleOutline } from "react-icons/io";
import { Container } from "reactstrap";


const VITE_API_URL = import.meta.env.VITE_API_URL

export default function FormularioProducto({
  actualizarProductos
}) {

  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState('')
  const [alerta, setAlerta] = useState('')

  function mostrarAlerta(mensaje, tipo) {
    setAlerta({ mensaje, tipo })
    setTimeout(() => {
      setAlerta(null)
    }, 3000)
  }

  async function añadirProducto() {

    if (!nombre || !precio) {
      mostrarAlerta('Todos los campos son obligatorios', 'error')
      return
    }

    const producto = {
      nombre: nombre,
      precio: precio
    }

    const res = await fetch(`${VITE_API_URL}/api/productos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(producto)
    })

    const data = await res.json()
    
    if (!res.ok) {
      console.log(res)
      if(data.error) 
        mostrarAlerta(data.error, 'error')
      else
        mostrarAlerta('Hubo un error al crear el producto', 'error')
      return
    }


    if (data.error) {
      mostrarAlerta(data.error, 'error')
      return
    }

    mostrarAlerta(data.mensaje, 'success')
    actualizarProductos()

    setNombre('')
    setPrecio('')
  }


  return (
    <Container>
      {alerta && <Alert mensaje={alerta.mensaje} tipo={alerta.tipo} />}
      <h2>Añadir Producto</h2>
      <form onSubmit={(e) => e.preventDefault()} className="mt-4 w-50 d-flex flex-column">
        <label htmlFor="nombre">Nombre</label>
        <input className="form-control" type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <label htmlFor="precio">Precio</label>
        <input className="form-control" type="number" id="precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
        <button className="btn ms-auto mt-1" onClick={añadirProducto}>
          Añadir producto
          <IoMdAddCircleOutline className="fs-2" />
        </button>
      </form>
      <hr />
    </Container>
  )
}