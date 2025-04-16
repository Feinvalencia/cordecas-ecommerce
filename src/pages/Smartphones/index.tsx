import { Layout } from "../../components";
import { ProductCard } from "../../components";
import { Link } from "react-router-dom";
import { ProductProps } from "../../types/product";

export default function SmartphonesPage() {
  

  const smartphones: ProductProps[] = [
    {
      id: 1,
      title: "Ulefone Armor X10 Pro",
      price: 599900,
      oldPrice: 749900,
      discount: 20,
      description: "Smartphone resistente con certificación IP68/IP69K, pantalla de 5.45 pulgadas, batería de 5180mAh",
      category: "smartphones",
      image: "https://placehold.co/300x400/111/fff?text=Armor+X10+Pro",
      rating: 4.8,
      reviews: 45,
      features: ["IP68/IP69K", "5180mAh", "4GB RAM", "Android 12"]
    },
    {
      id: 2,
      title: "Ulefone Armor X12 Pro",
      price: 649900,
      oldPrice: 799900,
      discount: 19,
      description: "Smartphone resistente con certificación IP68/IP69K, pantalla de 5.45 pulgadas, batería de 5180mAh",
      category: "smartphones",
      image: "https://placehold.co/300x400/111/fff?text=Armor+X12+Pro",
      rating: 4.7,
      reviews: 38
    },
    {
      id: 3,
      title: "Ulefone Armor X13",
      price: 749900,
      oldPrice: 899900,
      discount: 17,
      description: "Smartphone resistente con pantalla HD+ de 6.52 pulgadas, 6GB RAM + 64GB ROM, certificación IP68/IP69K y MIL-STD-810G",
      category: "smartphones",
      image: "https://placehold.co/300x400/111/fff?text=Armor+X13",
      rating: 4.9,
      reviews: 52
    },
    {
      id: 4,
      title: "Ulefone Armor 22",
      price: 1299900,
      oldPrice: 1499900,
      discount: 13,
      description: "Smartphone resistente con procesador Helio G99, 8GB RAM + 256GB ROM, cámara de 108MP",
      category: "smartphones",
      image: "https://placehold.co/300x400/111/fff?text=Armor+22",
      rating: 4.9,
      reviews: 64
    },
    {
      id: 5,
      title: "Ulefone Power Armor 19",
      price: 1399900,
      oldPrice: 1599900,
      discount: 13,
      description: "Smartphone resistente con batería de 9600mAh, carga rápida de 66W, 8GB RAM + 256GB ROM",
      category: "smartphones",
      image: "https://placehold.co/300x400/111/fff?text=Power+Armor+19",
      rating: 4.8,
      reviews: 73
    },
    {
      id: 6,
      title: "Ulefone Armor 19T",
      price: 1199900,
      oldPrice: 1399900,
      discount: 14,
      description: "Smartphone resistente con cámara térmica FLIR Lepton 3.5, 8GB RAM + 256GB ROM",
      category: "smartphones",
      image: "https://placehold.co/300x400/111/fff?text=Armor+19T",
      rating: 4.7,
      reviews: 41
    },
    {
      id: 7,
      title: "Ulefone Armor 24",
      price: 1499900,
      oldPrice: 1699900,
      discount: 12,
      description: "Smartphone resistente con procesador Dimensity 8020, 12GB RAM + 512GB ROM, cámara de 108MP",
      category: "smartphones",
      image: "https://placehold.co/300x400/111/fff?text=Armor+24",
      rating: 4.9,
      reviews: 28
    },
    {
      id: 8,
      title: "Ulefone Armor 23 Ultra",
      price: 1799900,
      oldPrice: 1999900,
      discount: 10,
      description: "Smartphone resistente con procesador Dimensity 9000, 16GB RAM + 512GB ROM, cámara de 200MP",
      category: "smartphones",
      image: "https://placehold.co/300x400/111/fff?text=Armor+23+Ultra",
      rating: 5.0,
      reviews: 19
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">

        <div className="flex items-center text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-black">Inicio</Link>
          <span className="mx-2">/</span>
          <span className="text-black">Smartphones</span>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Smartphones Ulefone Armor</h1>
          <p className="text-gray-600">
            Descubre nuestra colección de smartphones resistentes Ulefone Armor, diseñados para resistir las condiciones más extremas.
            Todos nuestros dispositivos cuentan con certificación IP68/IP69K y MIL-STD-810G, garantizando resistencia al agua, polvo y caídas.
          </p>
        </div>


        <div className="flex flex-col md:flex-row gap-8">

          <div className="w-full md:w-1/4 bg-gray-50 p-6 rounded-lg h-fit">
            <h2 className="text-lg font-bold mb-4">Filtros</h2>
            

            <div className="mb-6">
              <h3 className="font-medium mb-3">Precio</h3>
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <input type="checkbox" id="price-1" className="mr-2" />
                  <label htmlFor="price-1">Menos de $700.000</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="price-2" className="mr-2" />
                  <label htmlFor="price-2">$700.000 - $1.000.000</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="price-3" className="mr-2" />
                  <label htmlFor="price-3">$1.000.000 - $1.500.000</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="price-4" className="mr-2" />
                  <label htmlFor="price-4">Más de $1.500.000</label>
                </div>
              </div>
            </div>
            

            <div className="mb-6">
              <h3 className="font-medium mb-3">Características</h3>
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <input type="checkbox" id="feature-1" className="mr-2" />
                  <label htmlFor="feature-1">Batería 5000+ mAh</label>
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
                  <label htmlFor="feature-4">Cámara 108MP+</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="feature-5" className="mr-2" />
                  <label htmlFor="feature-5">Cámara térmica</label>
                </div>
              </div>
            </div>
            

            <button className="w-full bg-black text-white py-2 rounded-full font-medium hover:bg-gray-800 transition">
              Aplicar filtros
            </button>
          </div>
          

          <div className="w-full md:w-3/4">

            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-500">{smartphones.length} productos</p>
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
              {smartphones.map(phone => (
                <ProductCard 
                  key={phone.id}
                  id={phone.id}
                  title={phone.title}
                  price={phone.price}
                  image={phone.image}
                  oldPrice={phone.oldPrice}
                  discount={phone.discount}
                  rating={phone.rating}
                  category={phone.category}
                  description={phone.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
