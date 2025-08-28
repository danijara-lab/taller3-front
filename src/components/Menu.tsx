import { useState } from "react";
//import { Link } from "react-router-dom";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">Menu</h1>

        {/* Botón menú móvil */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Links */}
        <ul className={`md:flex md:space-x-6 ${open ? "block" : "hidden"} md:block`}>
          <li>
            <Link to="/home" className="hover:text-gray-300">Inicio</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">Empresas</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-300">Estudiantes</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">Profesores</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
