import { ProductCard, Layout } from "../../components";
import { Link } from "react-router-dom";
import images from "../../assets/images";

// Datos simulados de productos Ulefone Armor
const armorPhones = [
  {
    id: 1,
    title: "Ulefone Armor X10 Pro",
    price: 599900,
    description: "Smartphone resistente con certificación IP68/IP69K, pantalla de 5.45 pulgadas, batería de 5180mAh",
    category: "smartphones",
    image: "https://placehold.co/300x400/111/fff?text=Armor+X10+Pro",
    rating: 4.8
  },
  {
    id: 2,
    title: "Ulefone Armor X12 Pro",
    price: 699900,
    description: "Smartphone resistente con Android 12, 4GB RAM + 32GB ROM, batería de 5180mAh",
    category: "smartphones",
    image: "https://placehold.co/300x400/111/fff?text=Armor+X12+Pro",
    rating: 4.7
  },
  {
    id: 3,
    title: "Ulefone Armor X13",
    price: 749900,
    description: "Smartphone resistente con pantalla HD+ de 6.52 pulgadas, 6GB RAM + 64GB ROM",
    category: "smartphones",
    image: "https://placehold.co/300x400/111/fff?text=Armor+X13",
    rating: 4.9
  },
  {
    id: 4,
    title: "Ulefone Armor 22",
    price: 1299900,
    description: "Smartphone resistente con procesador Helio G99, 8GB RAM + 256GB ROM, cámara de 108MP",
    category: "smartphones",
    image: "https://placehold.co/300x400/111/fff?text=Armor+22",
    rating: 4.8
  },
  {
    id: 5,
    title: "Ulefone Power Armor 19",
    price: 1399900,
    description: "Smartphone resistente con batería de 9600mAh, 8GB RAM + 256GB ROM, cámara de 64MP",
    category: "smartphones",
    image: "https://placehold.co/300x400/111/fff?text=Power+Armor+19",
    rating: 4.9
  },
  {
    id: 6,
    title: "Ulefone Armor 19T",
    price: 1199900,
    description: "Smartphone resistente con termómetro infrarrojo, 8GB RAM + 256GB ROM",
    category: "smartphones",
    image: "https://placehold.co/300x400/111/fff?text=Armor+19T",
    rating: 4.7
  },
  {
    id: 7,
    title: "Ulefone Armor 24",
    price: 1499900,
    description: "Smartphone resistente con pantalla de 6.78 pulgadas, 12GB RAM + 256GB ROM, cámara de 108MP",
    category: "smartphones",
    image: "https://placehold.co/300x400/111/fff?text=Armor+24",
    rating: 4.9
  },
  {
    id: 8,
    title: "Ulefone Armor 23 Ultra",
    price: 1599900,
    description: "Smartphone resistente con procesador Dimensity 6100+, 12GB RAM + 512GB ROM",
    category: "smartphones",
    image: "https://placehold.co/300x400/111/fff?text=Armor+23+Ultra",
    rating: 5.0
  }
];

const armorTablets = [
  {
    id: 9,
    title: "Ulefone Armor Pad 1",
    price: 1099900,
    description: "Tablet resistente con certificación IP68, pantalla de 10.1 pulgadas, batería de 8300mAh",
    category: "tablets",
    image: "https://placehold.co/400x300/111/fff?text=Armor+Pad+1",
    rating: 4.8
  },
  {
    id: 10,
    title: "Ulefone Armor Pad 2",
    price: 1299900,
    description: "Tablet resistente con Android 12, 8GB RAM + 128GB ROM, batería de 10000mAh",
    category: "tablets",
    image: "https://placehold.co/400x300/111/fff?text=Armor+Pad+2",
    rating: 4.9
  }
];

export default function Home() {
  // Usamos datos simulados en lugar de la API
  const loading = false;
  const error = false;

  if (loading) {
    return (
      <Layout>
        <p className="text-center py-20">Cargando productos...</p>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <p className="text-center py-20">Ocurrió un error al cargar los productos</p>
      </Layout>
    );
  }

  // Usar los datos simulados de productos Ulefone Armor
  const newArrivals = armorPhones.slice(0, 4);
  const topSelling = armorPhones.slice(4, 8);
  const tablets = armorTablets.slice(0, 2);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero py-12 md:py-16 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10">
            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
              SMARTPHONES<br />RESISTENTES<br />PARA CUALQUIER DESAFÍO
            </h1>
            <p className="text-gray-600 mb-6 max-w-md">
              Descubre nuestra gama de teléfonos Ulefone Armor, diseñados para resistir las condiciones más extremas sin sacrificar rendimiento ni funcionalidad.
            </p>
            <Link to="/smartphones" className="bg-black text-white px-8 py-3 rounded-full font-medium inline-block hover:bg-gray-800 transition">
              Comprar Ahora
            </Link>
            
            <div className="flex flex-wrap gap-8 mt-12">
              <div className="text-center">
                <p className="text-xl font-bold">IP68/IP69K</p>
                <p className="text-sm text-gray-500">Resistencia al agua y polvo</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">MIL-STD-810G</p>
                <p className="text-sm text-gray-500">Estándar militar</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">5+ años</p>
                <p className="text-sm text-gray-500">Experiencia en Colombia</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10 mt-8 md:mt-0">
              <img 
                src="https://placehold.co/500x600/111/fff?text=Ulefone+Armor+24" 
                alt="Ulefone Armor 24" 
                className="rounded-lg shadow-lg max-h-[500px] object-contain"
              />
            </div>
            <div className="absolute top-1/4 -right-4 w-16 h-16 bg-black rounded-full flex items-center justify-center z-0">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div className="absolute bottom-1/4 -left-4 w-16 h-16 bg-black rounded-full flex items-center justify-center z-0">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificaciones Section */}
      <section className="brands py-8 border-t border-b border-gray-200">
        <div className="flex flex-wrap justify-between items-center gap-6">
          <div className="text-center">
            <img src="https://placehold.co/50x50/111/fff?text=IP68" alt="IP68" className="h-12 mx-auto opacity-70 hover:opacity-100 transition" />
            <p className="text-xs mt-1">IP68/IP69K</p>
          </div>
          <div className="text-center">
            <img src="https://placehold.co/50x50/111/fff?text=MIL" alt="MIL-STD-810G" className="h-12 mx-auto opacity-70 hover:opacity-100 transition" />
            <p className="text-xs mt-1">MIL-STD-810G</p>
          </div>
          <div className="text-center">
            <img src="https://placehold.co/50x50/111/fff?text=Android" alt="Android" className="h-12 mx-auto opacity-70 hover:opacity-100 transition" />
            <p className="text-xs mt-1">Android 12/13</p>
          </div>
          <div className="text-center">
            <img src="https://placehold.co/50x50/111/fff?text=Battery" alt="Batería" className="h-12 mx-auto opacity-70 hover:opacity-100 transition" />
            <p className="text-xs mt-1">Gran Batería</p>
          </div>
          <div className="text-center">
            <img src="https://placehold.co/50x50/111/fff?text=Camera" alt="Cámara" className="h-12 mx-auto opacity-70 hover:opacity-100 transition" />
            <p className="text-xs mt-1">Cámara de Alta Resolución</p>
          </div>
        </div>
      </section>

      {/* Smartphones Section */}
      <section className="new-arrivals py-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          SMARTPHONES RESISTENTES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/smartphones" className="text-black font-medium hover:underline inline-flex items-center">
            Ver Todos <span className="ml-2">→</span>
          </Link>
        </div>
      </section>

      {/* Top Selling Section */}
      <section className="top-selling py-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          TELÉFONOS MÁS VENDIDOS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topSelling.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/smartphones" className="text-black font-medium hover:underline inline-flex items-center">
            Ver Todos <span className="ml-2">→</span>
          </Link>
        </div>
      </section>

      {/* Tablets Section */}
      <section className="tablets py-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          TABLETS RESISTENTES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {tablets.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/tablets" className="text-black font-medium hover:underline inline-flex items-center">
            Ver Todos <span className="ml-2">→</span>
          </Link>
        </div>
      </section>

      {/* Categorías Section */}
      <section className="categories py-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          CATEGORÍAS DE PRODUCTOS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/smartphones" className="group relative overflow-hidden rounded-lg">
            <img 
              src="https://placehold.co/400x300/111/fff?text=Smartphones" 
              alt="Smartphones" 
              className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4">
              <h3 className="font-medium text-lg">Smartphones</h3>
            </div>
          </Link>
          <Link to="/tablets" className="group relative overflow-hidden rounded-lg">
            <img 
              src="https://placehold.co/400x300/111/fff?text=Tablets" 
              alt="Tablets" 
              className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4">
              <h3 className="font-medium text-lg">Tablets</h3>
            </div>
          </Link>
          <Link to="/accesorios" className="group relative overflow-hidden rounded-lg">
            <img 
              src="https://placehold.co/400x300/111/fff?text=Accesorios" 
              alt="Accesorios" 
              className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4">
              <h3 className="font-medium text-lg">Accesorios</h3>
            </div>
          </Link>
          <Link to="/soporte" className="group relative overflow-hidden rounded-lg">
            <img 
              src="https://placehold.co/400x300/111/fff?text=Soporte" 
              alt="Soporte" 
              className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4">
              <h3 className="font-medium text-lg">Soporte Técnico</h3>
            </div>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
