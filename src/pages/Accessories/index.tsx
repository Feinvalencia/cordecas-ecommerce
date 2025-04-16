import { Layout } from "../../components";
import { Link } from "react-router-dom";
import { ProductProps } from "../../types/product";

export default function AccessoriesPage() {
  const accessories: ProductProps[] = [
    {
      id: 201,
      title: "Cargador Rápido 66W Ulefone",
      price: 99900,
      oldPrice: 129900,
      discount: 23,
      description: "Cargador rápido de 66W compatible con todos los smartphones y tablets Ulefone Armor con soporte para carga rápida.",
      category: "accessories",
      image: "https://placehold.co/300x300/111/fff?text=Cargador+66W",
      rating: 4.8,
      reviews: 56
    },
    {
      id: 202,
      title: "Cable USB-C Reforzado Ulefone",
      price: 49900,
      oldPrice: 69900,
      discount: 29,
      description: "Cable USB-C a USB-A reforzado con nylon trenzado, resistente al agua y a la tensión. Compatible con todos los dispositivos Ulefone.",
      category: "accessories",
      image: "https://placehold.co/300x300/111/fff?text=Cable+USB-C",
      rating: 4.7,
      reviews: 83
    },
    {
      id: 203,
      title: "Protector de Pantalla Armor Glass",
      price: 39900,
      oldPrice: 59900,
      discount: 33,
      description: "Protector de pantalla de vidrio templado para smartphones Ulefone Armor. Resistente a rayones y golpes.",
      category: "accessories",
      image: "https://placehold.co/300x300/111/fff?text=Protector+Pantalla",
      rating: 4.6,
      reviews: 124
    },
    {
      id: 204,
      title: "Funda Reforzada Ulefone Armor",
      price: 79900,
      oldPrice: 99900,
      discount: 20,
      description: "Funda reforzada con protección adicional para smartphones Ulefone Armor. Resistente a caídas de hasta 3 metros.",
      category: "accessories",
      image: "https://placehold.co/300x300/111/fff?text=Funda+Reforzada",
      rating: 4.9,
      reviews: 67
    },
    {
      id: 205,
      title: "Batería Externa 20000mAh Ulefone",
      price: 149900,
      oldPrice: 179900,
      discount: 17,
      description: "Batería externa de 20000mAh con carga rápida de 45W. Resistente al agua y polvo con certificación IP67.",
      category: "accessories",
      image: "https://placehold.co/300x300/111/fff?text=Batería+Externa",
      rating: 4.8,
      reviews: 92
    },
    {
      id: 206,
      title: "Soporte Vehicular Magnético Ulefone",
      price: 89900,
      oldPrice: 109900,
      discount: 18,
      description: "Soporte vehicular magnético para smartphones Ulefone Armor. Instalación sencilla y sujeción segura.",
      category: "accessories",
      image: "https://placehold.co/300x300/111/fff?text=Soporte+Vehicular",
      rating: 4.7,
      reviews: 45
    },
    {
      id: 207,
      title: "Auriculares Bluetooth Ulefone",
      price: 129900,
      oldPrice: 159900,
      discount: 19,
      description: "Auriculares Bluetooth resistentes al agua con certificación IPX7. Batería de larga duración y cancelación de ruido.",
      category: "accessories",
      image: "https://placehold.co/300x300/111/fff?text=Auriculares+BT",
      rating: 4.6,
      reviews: 78
    },
    {
      id: 208,
      title: "Adaptador USB-C a HDMI Ulefone",
      price: 69900,
      oldPrice: 89900,
      discount: 22,
      description: "Adaptador USB-C a HDMI para conectar tu smartphone o tablet Ulefone a un monitor o TV.",
      category: "accessories",
      image: "https://placehold.co/300x300/111/fff?text=Adaptador+HDMI",
      rating: 4.5,
      reviews: 34
    },
    {
      id: 209,
      title: "Correa de Muñeca para Ulefone Armor",
      price: 29900,
      oldPrice: 39900,
      discount: 25,
      description: "Correa de muñeca ajustable para smartphones Ulefone Armor. Ideal para actividades al aire libre.",
      category: "accessories",
      image: "https://placehold.co/300x300/111/fff?text=Correa+Muñeca",
      rating: 4.4,
      reviews: 51
    },
    {
      id: 210,
      title: "Lápiz Stylus para Tablets Ulefone",
      price: 59900,
      oldPrice: 79900,
      discount: 25,
      description: "Lápiz stylus de precisión para tablets Ulefone Armor. Ideal para tomar notas y dibujar.",
      category: "accessories",
      image: "https://placehold.co/300x300/111/fff?text=Lápiz+Stylus",
      rating: 4.7,
      reviews: 29
    },
    {
      id: 211,
      title: "Teclado Bluetooth para Tablets Ulefone",
      price: 199900,
      oldPrice: 229900,
      discount: 13,
      description: "Teclado Bluetooth resistente al agua para tablets Ulefone Armor. Diseño compacto y batería de larga duración.",
      category: "accessories",
      image: "https://placehold.co/300x300/111/fff?text=Teclado+BT",
      rating: 4.8,
      reviews: 37
    },
    {
      id: 212,
      title: "Cargador Inalámbrico Ulefone",
      price: 109900,
      oldPrice: 139900,
      discount: 21,
      description: "Cargador inalámbrico de 15W compatible con smartphones Ulefone Armor con soporte para carga inalámbrica.",
      category: "accessories",
      image: "https://placehold.co/300x300/111/fff?text=Cargador+Inalámbrico",
      rating: 4.6,
      reviews: 43
    }
  ];


  const accessoryCategories = [
    { id: 1, name: "Cargadores y Baterías", count: 3, image: "https://placehold.co/200x200/111/fff?text=Cargadores" },
    { id: 2, name: "Protección", count: 2, image: "https://placehold.co/200x200/111/fff?text=Protección" },
    { id: 3, name: "Audio", count: 1, image: "https://placehold.co/200x200/111/fff?text=Audio" },
    { id: 4, name: "Soportes", count: 1, image: "https://placehold.co/200x200/111/fff?text=Soportes" },
    { id: 5, name: "Cables y Adaptadores", count: 2, image: "https://placehold.co/200x200/111/fff?text=Cables" },
    { id: 6, name: "Accesorios para Tablets", count: 2, image: "https://placehold.co/200x200/111/fff?text=Tablets" }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">

        <div className="flex items-center text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-black">Inicio</Link>
          <span className="mx-2">/</span>
          <span className="text-black">Accesorios</span>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Accesorios para Dispositivos Ulefone</h1>
          <p className="text-gray-600">
            Descubre nuestra amplia gama de accesorios originales y compatibles para smartphones y tablets Ulefone Armor.
            Desde cargadores y protectores de pantalla hasta fundas y auriculares, tenemos todo lo que necesitas para
            complementar y proteger tu dispositivo resistente.
          </p>
        </div>


        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Categorías de Accesorios</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {accessoryCategories.map(category => (
              <div key={category.id} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition cursor-pointer">
                <div className="w-20 h-20 mx-auto mb-3 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                  <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-medium">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} productos</p>
              </div>
            ))}
          </div>
        </div>


        <div className="bg-gray-900 text-white p-8 rounded-lg mb-12 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">Accesorios Originales Ulefone</h2>
            <p className="mb-4 max-w-lg">Obtén un 15% de descuento adicional al comprar cualquier accesorio junto con un smartphone o tablet Ulefone.</p>
            <button className="inline-block bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition">
              Ver ofertas
            </button>
          </div>
          <div className="absolute right-0 bottom-0 opacity-20">
            <svg width="300" height="300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44772 4 5 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 9H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 20V9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>


        <div className="flex flex-col md:flex-row gap-8">

          <div className="w-full md:w-1/4 bg-gray-50 p-6 rounded-lg h-fit">
            <h2 className="text-lg font-bold mb-4">Filtros</h2>
            

            <div className="mb-6">
              <h3 className="font-medium mb-3">Precio</h3>
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <input type="checkbox" id="price-1" className="mr-2" />
                  <label htmlFor="price-1">Menos de $50.000</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="price-2" className="mr-2" />
                  <label htmlFor="price-2">$50.000 - $100.000</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="price-3" className="mr-2" />
                  <label htmlFor="price-3">$100.000 - $150.000</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="price-4" className="mr-2" />
                  <label htmlFor="price-4">Más de $150.000</label>
                </div>
              </div>
            </div>
            

            <div className="mb-6">
              <h3 className="font-medium mb-3">Categoría</h3>
              <div className="flex flex-col gap-2">
                {accessoryCategories.map(category => (
                  <div key={category.id} className="flex items-center">
                    <input type="checkbox" id={`category-${category.id}`} className="mr-2" />
                    <label htmlFor={`category-${category.id}`}>{category.name}</label>
                  </div>
                ))}
              </div>
            </div>
            

            <div className="mb-6">
              <h3 className="font-medium mb-3">Compatibilidad</h3>
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <input type="checkbox" id="compat-1" className="mr-2" />
                  <label htmlFor="compat-1">Smartphones Ulefone</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="compat-2" className="mr-2" />
                  <label htmlFor="compat-2">Tablets Ulefone</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="compat-3" className="mr-2" />
                  <label htmlFor="compat-3">Todos los dispositivos</label>
                </div>
              </div>
            </div>
            

            <button className="w-full bg-black text-white py-2 rounded-full font-medium hover:bg-gray-800 transition">
              Aplicar filtros
            </button>
          </div>
          

          <div className="w-full md:w-3/4">

            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-500">{accessories.length} productos</p>
              <div className="flex items-center">
                <span className="mr-2">Ordenar por:</span>
                <select className="border border-gray-300 rounded p-1">
                  <option>Relevancia</option>
                  <option>Precio: menor a mayor</option>
                  <option>Precio: mayor a menor</option>
                  <option>Más recientes</option>
                  <option>Mejor valorados</option>
                </select>
              </div>
            </div>
            

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {accessories.map(accessory => (
                <Link 
                  key={accessory.id} 
                  to={`/product/${accessory.id}`}
                  className="group relative bg-gray-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md block"
                >
                  {accessory.discount && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                      -{accessory.discount}%
                    </div>
                  )}
                  <div className="relative overflow-hidden rounded-lg bg-gray-100 mb-4 h-[200px] flex items-center justify-center">
                    <img 
                      src={accessory.image} 
                      alt={accessory.title} 
                      className="h-[150px] object-contain transition-transform duration-300 group-hover:scale-110" 
                    />
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < Math.floor(accessory.rating || 0) ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-1">({accessory.reviews})</span>
                    </div>
                    <div className="block text-sm font-medium mb-2 line-clamp-2 h-10 group-hover:text-blue-600 transition">
                      {accessory.title}
                    </div>
                    <div className="flex items-center">
                      <p className="font-bold text-lg">${accessory.price.toLocaleString('es-CO')}</p>
                      {accessory.oldPrice && (
                        <p className="text-gray-500 text-sm line-through ml-2">${accessory.oldPrice.toLocaleString('es-CO')}</p>
                      )}
                    </div>
                    <button 
                      className="mt-3 w-full bg-black text-white py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition"
                      onClick={(e) => e.preventDefault()}
                    >
                      Añadir al carrito
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
