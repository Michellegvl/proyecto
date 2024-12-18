import React from 'react';
import Navbar from './Navbar'; // Asegúrate de usar la ruta correcta al archivo Navbar.js
import Footer from './Footer'; // Asegúrate de usar la ruta correcta al archivo Footer.js

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar /> {/* Aquí se coloca el encabezado */}
      <main style={{ flex: 1 }}>{children}</main> {/* Contenido principal */}
      <Footer /> {/* Aquí se coloca el pie de página */}
    </div>
  );
};

export default Layout;
