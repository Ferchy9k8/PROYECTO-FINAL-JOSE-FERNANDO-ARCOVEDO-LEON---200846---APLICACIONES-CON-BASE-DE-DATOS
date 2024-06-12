import React, { useState, useEffect } from "react";
import DistribuidoresTable from "./DistribuidoresTable";
import ProductosTable from "./ProductosTable";
import VentasTable from "./VentasTable";

export const Altas = () => {
  const [distribuidor, setDistribuidor] = useState({
    nombre: "",
    telefono: "",
    direccion: "",
    correo: "",
  });

  const [producto, setProducto] = useState({
    id: "",
    nombre: "",
    categoria: "",
    descripcion: "",
    stock: 0,
    precio: 0,
  });
  
  const [venta, setVenta] = useState({
    id: "",
    nombre: "",
    categoria: "",
    precio: 0,
    cantidad: 0,
    total: 0,
  });

  const [mensaje, setMensaje] = useState("");
  const [distribuidores, setDistribuidores] = useState([]);
  const [productos, setProductos] = useState([]);
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    // Cargar datos de distribuidores desde el archivo JSON al cargar el componente
    const distribuidoresData = localStorage.getItem("distribuidores");
    if (distribuidoresData) {
      setDistribuidores(JSON.parse(distribuidoresData));
    }
    // Cargar datos de productos desde el archivo JSON al cargar el componente
    const productosData = localStorage.getItem("productos");
    if (productosData) {
      setProductos(JSON.parse(productosData));
    }
    // Cargar datos de ventas desde el archivo JSON al cargar el componente
    const ventasData = localStorage.getItem("ventas");
    if (ventasData) {
      setVentas(JSON.parse(ventasData));
    }
  }, []);

  const guardarDatos = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const handleDistribuidorChange = (event) => {
    const { name, value } = event.target;
    setDistribuidor({ ...distribuidor, [name]: value });
  };

  const handleProductoChange = (event) => {
    const { name, value } = event.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleVentaChange = (event) => {
    const { name, value } = event.target;
    setVenta({ ...venta, [name]: value });
  };

  const handleSubmitDistribuidor = (event) => {
    event.preventDefault();
    // Agregar nuevo distribuidor
    const nuevosDistribuidores = [...distribuidores, distribuidor];
    setDistribuidores(nuevosDistribuidores);
    // Guardar distribuidores en el archivo JSON
    guardarDatos("distribuidores", nuevosDistribuidores);
    // Limpiar formulario y mostrar mensaje
    setDistribuidor({ nombre: "", telefono: "", direccion: "", correo: "" });
    setMensaje("Distribuidor agregado correctamente.");
  };

  const handleSubmitProducto = (event) => {
    event.preventDefault();
    // Asignar un ID único al nuevo producto
    const nuevoProducto = { ...producto, id: Date.now().toString() };
    // Agregar nuevo producto
    const nuevosProductos = [...productos, nuevoProducto];
    setProductos(nuevosProductos);
    // Guardar productos en el archivo JSON
    guardarDatos("productos", nuevosProductos);
    // Limpiar formulario y mostrar mensaje
    setProducto({ nombre: "", categoria: "", descripcion: "", stock: 0, precio: 0 });
    setMensaje("Producto agregado correctamente.");
  };
  
  const handleSubmitVenta = (event) => {
    event.preventDefault();
    // Asignar un ID único a la nueva venta
    const nuevaVenta = { ...venta, id: Date.now().toString() };
    // Agregar nueva venta
    const nuevasVentas = [...ventas, nuevaVenta];
    setVentas(nuevasVentas);
    // Guardar ventas en el archivo JSON
    guardarDatos("ventas", nuevasVentas);
    // Limpiar formulario y mostrar mensaje
    setVenta({ nombre: "", categoria: "", precio: 0, cantidad: 0, total: 0 });
    setMensaje("Venta agregada correctamente.");
  };

  return (
    <div className="w3-container">
      {/* Mensaje de éxito o error */}
      {mensaje && <p>{mensaje}</p>}

      {/* Formulario para agregar distribuidores */}
      <form className="w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin" onSubmit={handleSubmitDistribuidor}>
        <h2>Agregar Distribuidor</h2>
<p>
<label className="w3-text-blue">
<b>Nombre del distribuidor</b>
</label>
<input
         name="nombre"
         type="text"
         value={distribuidor.nombre}
         onChange={handleDistribuidorChange}
         className="w3-input w3-border"
       />
</p>
<p>
<label className="w3-text-blue">
<b>Teléfono</b>
</label>
<input
         name="telefono"
         type="text"
         value={distribuidor.telefono}
         onChange={handleDistribuidorChange}
         className="w3-input w3-border"
       />
</p>
<p>
<label className="w3-text-blue">
<b>Dirección</b>
</label>
<input
         name="direccion"
         type="text"
         value={distribuidor.direccion}
         onChange={handleDistribuidorChange}
         className="w3-input w3-border"
       />
</p>
<p>
<label className="w3-text-blue">
<b>Correo electrónico</b>
</label>
<input
         name="correo"
         type="email"
         value={distribuidor.correo}
         onChange={handleDistribuidorChange}
         className="w3-input w3-border"
       />
</p>
<button type="submit" className="w3-btn w3-blue w3-margin-top">
Agregar Distribuidor
</button>
</form>
 {/* Formulario para agregar productos */}
 <form className="w3-container w3-card-4 w3-light-grey w3-text-green w3-margin" onSubmit={handleSubmitProducto}>
    <h2>Agregar Producto</h2>
    <p>
      <label className="w3-text-green">
        <b>Nombre del producto</b>
      </label>
      <input
        name="nombre"
        type="text"
        value={producto.nombre}
        onChange={handleProductoChange}
        className="w3-input w3-border"
      />
    </p>
    <p>
      <label className="w3-text-green">
        <b>Categoría</b>
      </label>
      <input
        name="categoria"
        type="text"
        value={producto.categoria}
        onChange={handleProductoChange}
        className="w3-input w3-border"
      />
    </p>
    <p>
      <label className="w3-text-green">
        <b>Descripción</b>
      </label>
      <input
        name="descripcion"
        type="text"
        value={producto.descripcion}
        onChange={handleProductoChange}
        className="w3-input w3-border"
      />
    </p>
    <p>
      <label className="w3-text-green">
        <b>Stock</b>
      </label>
      <input
        name="stock"
        type="number"
        value={producto.stock}
        onChange={handleProductoChange}
        className="w3-input w3-border"
      />
    </p>
    <p>
      <label className="w3-text-green">
        <b>Precio</b>
      </label>
      <input
        name="precio"
        type="number"
        value={producto.precio}
        onChange={handleProductoChange}
        className="w3-input w3-border"
      />
    </p>
    <button type="submit" className="w3-btn w3-green w3-margin-top">
      Agregar Producto
    </button>
  </form>

  {/* Formulario para agregar ventas */}
  <form className="w3-container w3-card-4 w3-light-grey w3-text-red w3-margin" onSubmit={handleSubmitVenta}>
    <h2>Agregar Venta</h2>
    <p>
      <label className="w3-text-red">
        <b>Nombre del producto vendido</b>
      </label>
      <input
        name="nombre"
        type="text"
        value={venta.nombre}
        onChange={handleVentaChange}
        className="w3-input w3-border"
      />
    </p>
    <p>
      <label className="w3-text-red">
        <b>Categoría</b>
      </label>
      <input
        name="categoria"
        type="text"
        value={venta.categoria}
        onChange={handleVentaChange}
        className="w3-input w3-border"
      />
    </p>
    <p>
      <label className="w3-text-red">
        <b>Precio</b>
      </label>
      <input
        name="precio"
        type="number"
        value={venta.precio}
        onChange={handleVentaChange}
        className="w3-input w3-border"
      />
    </p>
    <p>
      <label className="w3-text-red">
        <b>Cantidad</b>
      </label>
      <input
        name="cantidad"
        type="number"
        value={venta.cantidad}
        onChange={handleVentaChange}
        className="w3-input w3-border"
      />
    </p>
    <p>
      <label className="w3-text-red">
        <b>Total</b>
      </label>
      <input
        name="total"
        type="number"
        value={venta.total}
        onChange={handleVentaChange}
        className="w3-input w3-border"
      />
    </p>
    <button type="submit" className="w3-btn w3-red w3-margin-top">
      Agregar Venta
    </button>
  </form>
</div>
);
};