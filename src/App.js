import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CatalogoProductos from './pages/Catalogo';

function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Bienvenidos a Perfumántica</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
        Explora una selección exclusiva de perfumes de alta gama para todos los gustos.
      </p>
      <img
        src="/images/banner.jpg"
        alt="Banner de perfumes"
        style={{
          width: '100%',
          maxHeight: '600px',
          objectFit: 'cover',
          marginBottom: '30px',
          borderRadius: '10px'
        }}
      />
      <Link to="/catalogo">
        <button
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Ver Catálogo
        </button>
      </Link>
    </div>
  );
}


function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '15px' }}>Inicio</Link>
        <Link to="/catalogo">Catálogo de Productos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<CatalogoProductos />} />
      </Routes>
    </Router>
  );
}

export default App;
