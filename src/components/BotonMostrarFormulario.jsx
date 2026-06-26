import { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import FormularioProducto from "./FormularioProducto";

export default function BotonMostrarFormulario({
  actualizarProductos
}) {
  const [mostrar, setMostrar] = useState(true)

  return (
    <>
      <div className="d-flex justify-content-end align-content-center me-4">
        <button className="btn" onClick={() => setMostrar(!mostrar)}>
          {mostrar ? "Ocultar Formulario" : "Mostrar Formulario"}
          {mostrar ? <MdExpandLess className="fs-1" /> : <MdExpandMore className="fs-1" />}
        </button>

      </div>
      {mostrar && <FormularioProducto actualizarProductos={actualizarProductos} />}
    </>
  )
}