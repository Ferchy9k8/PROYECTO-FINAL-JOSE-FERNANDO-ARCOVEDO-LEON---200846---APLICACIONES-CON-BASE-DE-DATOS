import React from "react";

const VentasTable = ({ ventas }) => {
  return (
    <div>
      <h2>Tabla de Ventas</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map((venta, index) => (
            <tr key={venta.id}>
              <td>{venta.id}</td>
              <td>{venta.nombre}</td>
              <td>{venta.categoria}</td>
              <td>{venta.precio}</td>
              <td>{venta.cantidad}</td>
              <td>{venta.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VentasTable;