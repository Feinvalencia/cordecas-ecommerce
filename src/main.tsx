import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart, Home, ProductDetail, Smartphones, Tablets, Accessories, Support, Profile } from "./pages";
import { ShoppingCartProvider } from "./context";

createRoot(document.getElementById("root")!).render(
  <ShoppingCartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/smartphones" element={<Smartphones />} />
        <Route path="/tablets" element={<Tablets />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/support" element={<Support />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </ShoppingCartProvider>
);
