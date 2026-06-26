import { Card, CardBody, CardText, CardTitle } from "reactstrap";

export default function Producto({ nombre, precio }) {

  return (
    <Card
  style={{
    width: '18rem'
  }}
>
  <CardBody>
    <CardTitle tag="h5">
      {nombre}
    </CardTitle>
    <CardText>
      Precio: {Number(precio).toFixed(2)} €
    </CardText>
  </CardBody>
</Card>
  )
}