import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  // Aquí guardamos el carrito como array de productos con cantidades
  const [cart, setCart] = useState([]);

  // Función para agregar productos al carrito
  const addToCart = (producto) => {
    setCart((prev) => {
      const existe = prev.find((p) => p.id === producto.id);
      if (existe) {
        // Si el producto ya está, sumamos la cantidad
        return prev.map((p) =>
          p.id === producto.id
            ? { ...p, cantidad: p.cantidad + producto.cantidad }
            : p
        );
      } else {
        // Si no está, lo agregamos con la cantidad
        return [...prev, producto];
      }
    });
  };

  // Función para eliminar un producto del carrito por índice
  const removeProduct = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  // Calculamos la suma total de unidades del carrito
  const cartCount = cart.reduce((total, item) => total + item.cantidad, 0);

  // Solo un return con todo el contexto
  return (
    <CartContext.Provider value={{ cart, addToCart, removeProduct, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook para usar el contexto desde cualquier componente
export const useCart = () => useContext(CartContext);