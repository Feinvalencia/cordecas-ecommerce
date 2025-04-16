import { useState } from "react";
import { Layout } from "../../components";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("info");
  
  const user = {
    name: "Juan Pérez",
    email: "juan.perez@example.com",
    phone: "+57 300 123 4567",
    address: "Calle 123 #45-67, Bogotá, Colombia",
    avatar: "https://placehold.co/200x200/111/fff?text=JP",
    joinDate: "15 de marzo de 2023",
    orders: [
      {
        id: "ORD-2025-001",
        date: "10 de abril de 2025",
        total: 1299900,
        status: "Entregado",
        items: 2
      },
      {
        id: "ORD-2025-002",
        date: "25 de marzo de 2025",
        total: 649900,
        status: "En camino",
        items: 1
      },
      {
        id: "ORD-2024-015",
        date: "15 de diciembre de 2024",
        total: 1899900,
        status: "Entregado",
        items: 3
      }
    ],
    wishlist: [
      {
        id: 7,
        title: "Ulefone Armor 24",
        price: 1499900,
        image: "https://placehold.co/300x400/111/fff?text=Armor+24"
      },
      {
        id: 102,
        title: "Ulefone Armor Pad 2",
        price: 1499900,
        image: "https://placehold.co/400x300/111/fff?text=Armor+Pad+2"
      }
    ]
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-black">Inicio</Link>
          <span className="mx-2">/</span>
          <span className="text-black">Mi Perfil</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-gray-200">
                  <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                </div>
                <h2 className="text-xl font-bold mb-1">{user.name}</h2>
                <p className="text-gray-500 text-sm mb-4">Cliente desde {user.joinDate}</p>
                <button className="text-sm text-blue-600 hover:text-blue-800">Cambiar foto</button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <nav className="flex flex-col">
                <button 
                  className={`text-left px-6 py-4 font-medium border-l-4 ${activeTab === "info" ? "border-black bg-gray-100" : "border-transparent"}`}
                  onClick={() => setActiveTab("info")}
                >
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Información Personal
                  </div>
                </button>
                <button 
                  className={`text-left px-6 py-4 font-medium border-l-4 ${activeTab === "orders" ? "border-black bg-gray-100" : "border-transparent"}`}
                  onClick={() => setActiveTab("orders")}
                >
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Mis Pedidos
                  </div>
                </button>
                <button 
                  className={`text-left px-6 py-4 font-medium border-l-4 ${activeTab === "wishlist" ? "border-black bg-gray-100" : "border-transparent"}`}
                  onClick={() => setActiveTab("wishlist")}
                >
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Lista de Deseos
                  </div>
                </button>
                <button 
                  className={`text-left px-6 py-4 font-medium border-l-4 ${activeTab === "security" ? "border-black bg-gray-100" : "border-transparent"}`}
                  onClick={() => setActiveTab("security")}
                >
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Seguridad
                  </div>
                </button>
                <button 
                  className="text-left px-6 py-4 font-medium text-red-600 hover:text-red-800 border-l-4 border-transparent"
                >
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Cerrar Sesión
                  </div>
                </button>
              </nav>
            </div>
          </div>

          <div className="w-full md:w-2/3 lg:w-3/4">
            {activeTab === "info" && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-6 pb-3 border-b">Información Personal</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        defaultValue={user.name}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        defaultValue={user.email}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        defaultValue={user.phone}
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Dirección</label>
                      <input 
                        type="text" 
                        id="address" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        defaultValue={user.address}
                      />
                    </div>
                  </div>
                  <div className="pt-4">
                    <button type="submit" className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition">
                      Guardar cambios
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === "orders" && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-6 pb-3 border-b">Mis Pedidos</h3>
                {user.orders.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Pedido
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Fecha
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Total
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Estado
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Acción
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {user.orders.map((order) => (
                          <tr key={order.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{order.id}</div>
                              <div className="text-sm text-gray-500">{order.items} productos</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {order.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ${order.total.toLocaleString('es-CO')}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                order.status === "Entregado" 
                                  ? "bg-green-100 text-green-800" 
                                  : order.status === "En camino" 
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <a href="#" className="text-blue-600 hover:text-blue-900">Ver detalles</a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No tienes pedidos realizados.</p>
                    <Link to="/" className="mt-4 inline-block bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition">
                      Ir a comprar
                    </Link>
                  </div>
                )}
              </div>
            )}

            {activeTab === "wishlist" && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-6 pb-3 border-b">Lista de Deseos</h3>
                {user.wishlist.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {user.wishlist.map((item) => (
                      <div key={item.id} className="bg-gray-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                        <div className="relative overflow-hidden rounded-lg bg-gray-100 mb-4 h-[200px] flex items-center justify-center">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="h-[150px] object-contain transition-transform duration-300 group-hover:scale-110" 
                          />
                          <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                        <Link
                          to={`/product/${item.id}`}
                          className="block text-sm font-medium mb-2 line-clamp-2 h-10 hover:text-blue-600 transition"
                        >
                          {item.title}
                        </Link>
                        <p className="font-bold text-lg">${item.price.toLocaleString('es-CO')}</p>
                        <button className="mt-3 w-full bg-black text-white py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition">
                          Añadir al carrito
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No tienes productos en tu lista de deseos.</p>
                    <Link to="/" className="mt-4 inline-block bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition">
                      Explorar productos
                    </Link>
                  </div>
                )}
              </div>
            )}

            {activeTab === "security" && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-6 pb-3 border-b">Seguridad</h3>
                <form className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-4">Cambiar contraseña</h4>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">Contraseña actual</label>
                        <input 
                          type="password" 
                          id="current-password" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                      </div>
                      <div>
                        <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">Nueva contraseña</label>
                        <input 
                          type="password" 
                          id="new-password" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                      </div>
                      <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">Confirmar nueva contraseña</label>
                        <input 
                          type="password" 
                          id="confirm-password" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <button type="submit" className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition">
                      Actualizar contraseña
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
