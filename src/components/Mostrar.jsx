import React, { useState, useEffect } from "react";
import DistribuidoresTable from "./DistribuidoresTable";
import ProductosTable from "./ProductosTable";
import VentasTable from "./VentasTable";

export const Mostrar = () => {
  const [distribuidores, setDistribuidores] = useState([]);
  const [productos, setProductos] = useState([]);
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    // Cargar datos de distribuidores desde el almacenamiento local al cargar el componente
    const distribuidoresData = localStorage.getItem("distribuidores");
    if (distribuidoresData) {
      setDistribuidores(JSON.parse(distribuidoresData));
    }

    // Cargar datos de productos desde el almacenamiento local al cargar el componente
    const productosData = localStorage.getItem("productos");
    if (productosData) {
      setProductos(JSON.parse(productosData));
    }

    // Cargar datos de ventas desde el almacenamiento local al cargar el componente
    const ventasData = localStorage.getItem("ventas");
    if (ventasData) {
      setVentas(JSON.parse(ventasData));
    }
  }, []);

  return (
    <div>
      <div className="w3-container w3-margin">
        <h2 className="w3-text-blue">Distribuidores</h2>
        <DistribuidoresTable distribuidores={distribuidores} />
      </div>
      <div className="w3-container w3-margin">
        <h2 className="w3-text-green">Productos</h2>
        <ProductosTable productos={productos} />
      </div>
      <div className="w3-container w3-margin">
        <h2 className="w3-text-red">Ventas</h2>
        <VentasTable ventas={ventas} />
      </div>
    </div>
  );
};