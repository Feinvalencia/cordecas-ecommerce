import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";

export default function Navbar() {
  const context = useContext(ShoppingCartContext);

  return (
    <header className="w-full">
      <div className="bg-black text-white text-xs py-2 text-center">
        <p>Envíos a todo Colombia | Garantía oficial | Soporte técnico especializado</p>
      </div>
      <nav className="py-4 border-b border-gray-200">
        <div className="max-w-[1110px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-bold">CORDECAS</Link>
            <ul className="hidden md:flex gap-6">
              <li><Link to="/" className="hover:font-bold">Inicio</Link></li>
              <li><Link to="/smartphones" className="hover:font-bold">Smartphones</Link></li>
              <li><Link to="/tablets" className="hover:font-bold">Tablets</Link></li>
              <li><Link to="/accessories" className="hover:font-bold">Accesorios</Link></li>
              <li><Link to="/support" className="hover:font-bold">Soporte</Link></li>
            </ul>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Buscar productos..." className="bg-transparent outline-none ml-2 w-64" />
            </div>
            <Link to="/cart" className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="bg-black text-white px-1.5 py-0.5 rounded-full text-xs absolute -top-2 -right-2">
                {context.cartProducts.length}
              </span>
            </Link>
            <Link to="/profile" className="relative group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="absolute -bottom-10 right-0 w-max bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Mi Perfil</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
