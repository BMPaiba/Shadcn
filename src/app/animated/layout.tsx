// layout.js
import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <header>
        <h1>Mi Aplicación</h1>
        {/* Aquí puedes agregar un menú de navegación */}
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2024 Mi Aplicación</p>
      </footer>
    </div>
  );
};

export default Layout;
