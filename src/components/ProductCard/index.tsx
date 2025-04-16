import { Link } from "react-router-dom";
import { ProductProps } from "../../types/product";
import { useState } from "react";

interface ExtendedProductProps extends ProductProps {
  oldPrice?: number;
  discount?: number;
  rating?: number;
}

export default function ProductCard({ title, price, image, id, oldPrice, discount, rating = 4.5 }: ExtendedProductProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const calculatedOldPrice = oldPrice || Math.round(price * (1 + Math.random() * 0.5) * 10) / 10;
  const calculatedDiscount = discount || Math.round((1 - price / calculatedOldPrice) * 100);
  
  const showDiscount = calculatedDiscount > 0;

  return (
    <Link 
      to={`/product/${id}`}
      className="group relative bg-gray-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg bg-gray-100 mb-4 h-[200px] flex items-center justify-center">
        <img 
          src={image} 
          alt={title} 
          className="h-[150px] object-contain transition-transform duration-300 group-hover:scale-110" 
        />
        
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              className="bg-white text-black rounded-full p-2 mx-1 shadow-md hover:bg-gray-100 transition"
              onClick={(e) => e.preventDefault()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button 
              className="bg-black text-white rounded-full p-2 mx-1 shadow-md hover:bg-gray-800 transition"
              onClick={(e) => e.preventDefault()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </div>
        )}
      </div>
      
      <div className="product-information">
        <div className="flex items-center mb-1">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">(45)</span>
        </div>
        
        <div className="block text-sm font-medium mb-2 line-clamp-2 h-10 group-hover:text-blue-600 transition">
          {title}
        </div>
        
        <div className="flex items-center">
          <p className="font-bold text-lg">${price.toFixed(2)}</p>
          {showDiscount && (
            <p className="text-gray-500 text-sm line-through ml-2">${calculatedOldPrice.toFixed(2)}</p>
          )}
        </div>
      </div>
      
      {showDiscount && (
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
          -{calculatedDiscount}%
        </div>
      )}
    </Link>
  );
}
