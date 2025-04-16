export interface ProductProps {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  // Campos adicionales para el carrito y la página de detalle
  oldPrice?: number;
  discount?: number;
  rating?: number;
  reviews?: number;
  colors?: string[];
  sizes?: string[];
  features?: string[];
  images?: string[];
  quantity?: number;
  selectedColor?: string;
  selectedSize?: string;
}
