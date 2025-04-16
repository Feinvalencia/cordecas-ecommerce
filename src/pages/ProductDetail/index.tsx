import { useParams } from "react-router-dom";
import { Layout } from "../../components";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../context";
import { Link } from "react-router-dom";
import { ProductProps } from "../../types/product";

export default function ProductDetailPage() {
  const { id } = useParams();
  const context = useContext(ShoppingCartContext);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('M');

  // Datos simulados para este producto específico
  const productData = {
    id: Number(id) || 1,
    title: "Ulefone Armor X13",
    price: 749900,
    oldPrice: 899900,
    discount: 17,
    description: "Smartphone resistente con pantalla HD+ de 6.52 pulgadas, 6GB RAM + 64GB ROM, certificación IP68/IP69K y MIL-STD-810G. Batería de 5180mAh con carga rápida.",
    category: "smartphones",
    image: "https://placehold.co/400x500/111/fff?text=Armor+X13",
    rating: 4.9,
    reviews: 45,
    colors: ['black', 'orange', 'green'],
    sizes: ['S', 'M', 'L', 'XL'],
    features: [
      "Pantalla HD+ de 6.52 pulgadas",
      "6GB RAM + 64GB ROM",
      "Certificación IP68/IP69K",
      "Batería de 5180mAh",
      "Android 12"
    ],
    images: [
      "https://placehold.co/400x500/111/fff?text=Armor+X13+Front",
      "https://placehold.co/400x500/111/fff?text=Armor+X13+Side",
      "https://placehold.co/400x500/111/fff?text=Armor+X13+Back"
    ]
  };

  // Simulamos la carga de datos
  const loading = false;
  const error = false;
  const product = productData;

  // Verificar si el producto ya está en el carrito directamente en el render
  const isInCart = context.cartProducts.some(
    (item: ProductProps) => 
      item.id === product.id && 
      item.selectedColor === selectedColor && 
      item.selectedSize === selectedSize
  );

  // Incrementar la cantidad
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  // Decrementar la cantidad
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  // Añadir al carrito
  const addToCart = () => {
    if (product) {
      // Verificar si el producto ya está en el carrito
      const existingProductIndex = context.cartProducts.findIndex(
        (item: ProductProps) => 
          item.id === product.id && 
          item.selectedColor === selectedColor && 
          item.selectedSize === selectedSize
      );

      // Crear una copia del array de productos del carrito
      const updatedCart = [...context.cartProducts];

      if (existingProductIndex >= 0) {
        // Si el producto ya está en el carrito, actualizar la cantidad
        const existingQuantity = updatedCart[existingProductIndex].quantity || 0;
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity: existingQuantity + quantity
        };
      } else {
        // Si el producto no está en el carrito, añadirlo
        const itemToAdd = {
          ...product,
          quantity,
          selectedColor,
          selectedSize
        };
        updatedCart.push(itemToAdd);
      }

      // Actualizar el carrito
      context.setCartProducts(updatedCart);
      alert(`${quantity} unidad(es) de ${product.title} añadido al carrito`);
    }
  };

  // Eliminar del carrito
  const removeFromCart = () => {
    if (product) {
      // Filtrar los productos del carrito para eliminar el producto actual
      const updatedCart = context.cartProducts.filter(
        (item: ProductProps) => 
          !(item.id === product.id && 
            item.selectedColor === selectedColor && 
            item.selectedSize === selectedSize)
      );

      // Actualizar el carrito
      context.setCartProducts(updatedCart);
      alert(`${product.title} eliminado del carrito`);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <p>Cargando producto...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <p>Ocurrió un error al cargar el producto</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-black">Inicio</Link>
        <span className="mx-2">/</span>
        <Link to="/smartphones" className="hover:text-black">Smartphones</Link>
        <span className="mx-2">/</span>
        <span className="text-black">{product.title}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Imágenes del producto */}
        <div className="product-images">
          <div className="main-image mb-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-w-[500px] mx-auto rounded-lg shadow-md"
            />
          </div>
          <div className="thumbnails flex gap-3 justify-center">
            {product.images.map((img, index) => (
              <div key={index} className="w-20 h-20 border border-gray-200 rounded-md overflow-hidden cursor-pointer hover:border-black transition">
                <img src={img} alt={`${product.title} view ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Información del producto */}
        <div className="product-info">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          
          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">({product.reviews} reseñas)</span>
          </div>

          {/* Precio */}
          <div className="flex items-center mb-6">
            <p className="text-3xl font-bold">${(product.price).toLocaleString('es-CO')}</p>
            {product.oldPrice && (
              <>
                <p className="text-gray-500 text-lg line-through ml-3">${(product.oldPrice).toLocaleString('es-CO')}</p>
                <span className="ml-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">-{product.discount}%</span>
              </>
            )}
          </div>

          {/* Descripción */}
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Características */}
          <div className="mb-6">
            <h3 className="font-bold mb-2">Características:</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Selección de color */}
          <div className="mb-6">
            <h3 className="font-bold mb-2">Color:</h3>
            <div className="flex gap-2">
              {product.colors.map(color => (
                <div 
                  key={color} 
                  className={`w-8 h-8 rounded-full cursor-pointer ${selectedColor === color ? 'ring-2 ring-offset-2 ring-black' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          {/* Selección de tamaño */}
          <div className="mb-6">
            <h3 className="font-bold mb-2">Tamaño:</h3>
            <div className="flex gap-2">
              {product.sizes.map(size => (
                <div 
                  key={size} 
                  className={`w-10 h-10 flex items-center justify-center border ${selectedSize === size ? 'bg-black text-white' : 'border-gray-300 text-gray-700'} cursor-pointer`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Selector de cantidad */}
          <div className="mb-6">
            <h3 className="font-bold mb-2">Cantidad:</h3>
            <div className="flex items-center">
              <button 
                className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                onClick={decrementQuantity}
                aria-label="Disminuir cantidad"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <div className="w-12 h-10 border-t border-b border-gray-300 flex items-center justify-center font-medium">
                {quantity}
              </div>
              <button 
                className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                onClick={incrementQuantity}
                aria-label="Aumentar cantidad"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col gap-3">
            {/* Botón de añadir al carrito */}
            <button
              className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition flex items-center justify-center gap-2"
              onClick={addToCart}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Añadir al carrito
            </button>
            
            {/* Botón de eliminar del carrito - Solo se muestra si el producto está en el carrito */}
            {isInCart && (
              <button
                className="border border-red-500 text-red-500 px-8 py-3 rounded-full font-medium hover:bg-red-50 transition flex items-center justify-center gap-2"
                onClick={removeFromCart}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Eliminar del carrito
              </button>
            )}
            
            {/* Botón de favoritos */}
            <button className="border border-black px-8 py-3 rounded-full hover:bg-gray-100 transition flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Agregar a favoritos
            </button>
          </div>
        </div>
      </div>

      {/* Sección de productos relacionados */}
      <div className="related-products mt-16">
        <h2 className="text-2xl font-bold mb-6">También te puede interesar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Productos relacionados simulados */}
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="bg-gray-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
              <div className="relative overflow-hidden rounded-lg bg-gray-100 mb-4 h-[200px] flex items-center justify-center">
                <img 
                  src={`https://placehold.co/300x400/111/fff?text=Related+${i}`} 
                  alt={`Producto relacionado ${i}`} 
                  className="h-[150px] object-contain" 
                />
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${j < 4 ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <h3 className="font-medium mb-2 line-clamp-2 h-10">Ulefone Armor {10 + i}</h3>
                <p className="font-bold text-lg">${(599900 + i * 100000).toLocaleString('es-CO')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
