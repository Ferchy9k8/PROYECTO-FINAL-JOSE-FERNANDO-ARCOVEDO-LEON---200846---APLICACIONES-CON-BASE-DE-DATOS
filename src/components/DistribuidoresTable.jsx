import React from "react";

const DistribuidoresTable = ({ distribuidores }) => {
  if (!distribuidores || distribuidores.length === 0) {
    return <p>No se encontraron distribuidores.</p>;
  }

  return (
    <div>
    <h2>Tabla de Distribuidores</h2>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
        {distribuidores.map((distribuidor) => (
          <tr key={distribuidor.id}>
            <td>{distribuidor.nombre}</td>
            <td>{distribuidor.correo}</td>
            <td>{distribuidor.telefono}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default DistribuidoresTable;