import React, { useState } from 'react';

const productosIniciales = [
  {
    id: 1,
    nombre: 'Perfume Azzaro The Most Wanted',
    descripcion: 'Aroma intenso con notas amaderadas y especiadas.',
    precio: '$1,950 MXN',
    stock: 12,
    imagen: '/images/producto1.jpg'
  },
  {
    id: 2,
    nombre: 'Jean Paul Le Male Elixir',
    descripcion: 'Una versión dulce y potente de Le Male con fondo ambarado.',
    precio: '$2,300 MXN',
    stock: 8,
    imagen: '/images/producto2.jpg'
  },
  {
    id: 3,
    nombre: 'Versace Eros Parfum',
    descripcion: 'Perfume seductor con mezcla de menta, manzana y vainilla.',
    precio: '$2,100 MXN',
    stock: 10,
    imagen: '/images/producto3.jpg'
  },
  {
    id: 4,
    nombre: 'Valentino Uomo Born in Roma',
    descripcion: 'Aroma moderno con salvia, vetiver y madera ahumada.',
    precio: '$1,850 MXN',
    stock: 6,
    imagen: '/images/producto4.jpg'
  }
];

export default function CatalogoProductos() {
  {/* Estado para manejar los productos existentes en el catálogo */}
  const [productos, setProductos] = useState(productosIniciales);
  {/* Estado para capturar los valores del nuevo producto desde el formulario */}
  const [nuevoProducto, setNuevoProducto] = useState({ nombre: '', descripcion: '', precio: '', stock: '', imagen: '' });
  {/* Estado para controlar qué producto se ha seleccionado del listado */}
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  {/* Función para cambios en los campos del formulario */}
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setNuevoProducto({ ...nuevoProducto, [name]: value });
  };

  {/* Función para agregar un nuevo producto al estado de productos */}
  const agregarProducto = () => {
    const nuevo = { ...nuevoProducto, id: productos.length + 1 };
    setProductos([...productos, nuevo]);
    setNuevoProducto({ nombre: '', descripcion: '', precio: '', stock: '', imagen: '' });
  };

  {/* Renderizado principal del componente CatalogoProductos */}
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial' }}>
      <div style={{ flex: '1', padding: '20px', borderRight: '1px solid #ccc' }}>
        <h2>Catálogo</h2>
          {/* Menú  para seleccionar productos */}
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {productos.map((producto) => (
            <li key={producto.id} style={{ margin: '10px 0' }}>
              <button
                onClick={() => setProductoSeleccionado(producto)}
                style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: '#f0f0f0',
                  border: '1px solid #aaa',
                  cursor: 'pointer'
                }}
              >
                {producto.nombre}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Área de presentación del producto seleccionado */}
      <div style={{ flex: '2', padding: '20px' }}>
        {productoSeleccionado ? (
          <div style={{ border: '1px solid #ccc', padding: '15px' }}>
            <h3>{productoSeleccionado.nombre}</h3>
            <img
              src={productoSeleccionado.imagen}
              alt="Producto"
              style={{ maxWidth: '100%', maxHeight: '300px', marginBottom: '10px' }}
            />
            <p>{productoSeleccionado.descripcion}</p>
            <p><strong>Precio:</strong> {productoSeleccionado.precio}</p>
            <p><strong>Stock:</strong> {productoSeleccionado.stock}</p>
          </div>
          
        ) : (
          <p>Selecciona un producto del menú.</p>
        )}
      </div>

      {/* Formulario lateral derecho para captura de nuevos productos */}
      <div style={{ flex: '1', padding: '20px', borderLeft: '1px solid #ccc' }}>
        <h2>Agregar producto</h2>
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          value={nuevoProducto.nombre}
          onChange={manejarCambio}
          style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
        />
        <input
          type="text"
          placeholder="Descripción"
          name="descripcion"
          value={nuevoProducto.descripcion}
          onChange={manejarCambio}
          style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
        />
        <input
          type="text"
          placeholder="Precio"
          name="precio"
          value={nuevoProducto.precio}
          onChange={manejarCambio}
          style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
        />
        <input
          type="number"
          placeholder="Stock"
          name="stock"
          value={nuevoProducto.stock}
          onChange={manejarCambio}
          style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
        />
        <input
          type="text"
          placeholder="URL de imagen"
          name="imagen"
          value={nuevoProducto.imagen}
          onChange={manejarCambio}
          style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
        />
        <button
          onClick={agregarProducto}
          style={{
            padding: '10px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Agregar al catálogo
        </button>
      </div>
    </div>
  );
}
