import { Layout } from "../../components";
import { ProductCard } from "../../components";
import { Link } from "react-router-dom";
import { ProductProps } from "../../types/product";

export default function TabletsPage() {
  const tablets: ProductProps[] = [
    {
      id: 101,
      title: "Ulefone Armor Pad 1",
      price: 1299900,
      oldPrice: 1499900,
      discount: 13,
      description: "Tablet resistente con certificación IP68/IP69K, pantalla de 10.1 pulgadas, batería de 8300mAh, 8GB RAM + 128GB ROM",
      category: "tablets",
      image: "https://placehold.co/400x300/111/fff?text=Armor+Pad+1",
      rating: 4.7,
      reviews: 32
    },
    {
      id: 102,
      title: "Ulefone Armor Pad 2",
      price: 1499900,
      oldPrice: 1699900,
      discount: 12,
      description: "Tablet resistente con certificación IP68/IP69K, pantalla de 10.4 pulgadas, batería de 8800mAh, 8GB RAM + 256GB ROM",
      category: "tablets",
      image: "https://placehold.co/400x300/111/fff?text=Armor+Pad+2",
      rating: 4.8,
      reviews: 27
    },
    {
      id: 103,
      title: "Ulefone Armor Pad Pro",
      price: 1899900,
      oldPrice: 2099900,
      discount: 10,
      description: "Tablet resistente con certificación IP68/IP69K, pantalla de 11 pulgadas, batería de 9300mAh, 12GB RAM + 256GB ROM",
      category: "tablets",
      image: "https://placehold.co/400x300/111/fff?text=Armor+Pad+Pro",
      rating: 4.9,
      reviews: 18
    },
    {
      id: 104,
      title: "Ulefone Armor Tab 8",
      price: 1199900,
      oldPrice: 1399900,
      discount: 14,
      description: "Tablet resistente con certificación IP68/IP69K, pantalla de 8 pulgadas, batería de 7500mAh, 6GB RAM + 128GB ROM",
      category: "tablets",
      image: "https://placehold.co/400x300/111/fff?text=Armor+Tab+8",
      rating: 4.6,
      reviews: 23
    },
    {
      id: 105,
      title: "Ulefone Armor Tab 10T",
      price: 1599900,
      oldPrice: 1799900,
      discount: 11,
      description: "Tablet resistente con cámara térmica FLIR Lepton 3.5, pantalla de 10.1 pulgadas, batería de 8300mAh, 8GB RAM + 128GB ROM",
      category: "tablets",
      image: "https://placehold.co/400x300/111/fff?text=Armor+Tab+10T",
      rating: 4.8,
      reviews: 15
    },
    {
      id: 106,
      title: "Ulefone Armor Tab Ultra",
      price: 2199900,
      oldPrice: 2399900,
      discount: 8,
      description: "Tablet resistente con procesador Dimensity 8020, pantalla de 12 pulgadas, batería de 10000mAh, 12GB RAM + 512GB ROM",
      category: "tablets",
      image: "https://placehold.co/400x300/111/fff?text=Armor+Tab+Ultra",
      rating: 5.0,
      reviews: 9
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">

        <div className="flex items-center text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-black">Inicio</Link>
          <span className="mx-2">/</span>
          <span className="text-black">Tablets</span>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Tablets Ulefone Armor</h1>
          <p className="text-gray-600">
            Explora nuestra selección de tablets resistentes Ulefone Armor, diseñadas para profesionales y aventureros.
            Con certificación IP68/IP69K y MIL-STD-810G, estas tablets resistentes al agua, polvo y caídas son perfectas
            para entornos industriales, construcción, actividades al aire libre y más.
          </p>
        </div>


        <div className="bg-gray-900 text-white p-8 rounded-lg mb-8 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">Ulefone Armor Pad Pro</h2>
            <p className="mb-4 max-w-lg">La tablet resistente más potente del mercado. Con pantalla de 11 pulgadas, 
            batería de 9300mAh y procesador de alto rendimiento.</p>
            <Link to="/product/103" className="inline-block bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition">
              Ver detalles
            </Link>
          </div>
          <div className="absolute right-0 bottom-0 opacity-20">
            <svg width="300" height="300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 18H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                  <label htmlFor="price-1">Menos de $1.300.000</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="price-2" className="mr-2" />
                  <label htmlFor="price-2">$1.300.000 - $1.600.000</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="price-3" className="mr-2" />
                  <label htmlFor="price-3">$1.600.000 - $2.000.000</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="price-4" className="mr-2" />
                  <label htmlFor="price-4">Más de $2.000.000</label>
                </div>
              </div>
            </div>
            

            <div className="mb-6">
              <h3 className="font-medium mb-3">Tamaño de pantalla</h3>
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <input type="checkbox" id="screen-1" className="mr-2" />
                  <label htmlFor="screen-1">8 pulgadas</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="screen-2" className="mr-2" />
                  <label htmlFor="screen-2">10.1 pulgadas</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="screen-3" className="mr-2" />
                  <label htmlFor="screen-3">11 pulgadas</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="screen-4" className="mr-2" />
                  <label htmlFor="screen-4">12 pulgadas</label>
                </div>
              </div>
            </div>
            

            <div className="mb-6">
              <h3 className="font-medium mb-3">Características</h3>
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <input type="checkbox" id="feature-1" className="mr-2" />
                  <label htmlFor="feature-1">Cámara térmica</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="feature-2" className="mr-2" />
                  <label htmlFor="feature-2">RAM 8GB+</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="feature-3" className="mr-2" />
                  <label htmlFor="feature-3">Almacenamiento 256GB+</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="feature-4" className="mr-2" />
                  <label htmlFor="feature-4">Batería 9000mAh+</label>
                </div>
              </div>
            </div>
            

            <button className="w-full bg-black text-white py-2 rounded-full font-medium hover:bg-gray-800 transition">
              Aplicar filtros
            </button>
          </div>
          

          <div className="w-full md:w-3/4">

            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-500">{tablets.length} productos</p>
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
              {tablets.map(tablet => (
                <ProductCard 
                  key={tablet.id}
                  id={tablet.id}
                  title={tablet.title}
                  price={tablet.price}
                  image={tablet.image}
                  oldPrice={tablet.oldPrice}
                  discount={tablet.discount}
                  rating={tablet.rating}
                  category={tablet.category}
                  description={tablet.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
