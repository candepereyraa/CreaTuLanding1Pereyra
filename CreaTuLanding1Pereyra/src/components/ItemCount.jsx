import { useState } from "react";
import { useCart } from "./CartContext";

export default function ItemCount({ producto, maxQuantity }) {
  const [count, setCount] = useState(0);
  const { addToCart } = useCart();

  const sumar = () => {
    if (count < 5) setCount(count + 1);
  };

  const restar = () => {
    if (count > 0) setCount(count - 1);
  };

  const handleClick = () => {
    if (count > 0) {
       console.log("Producto agregado al carrito:", producto); // 👀
      addToCart({ ...producto, cantidad: count });
      setCount(0); // opcional: resetea el contador después de agregar
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <button onClick={restar} style={{ color: "red" }} disabled={count === 0}>
        -
      </button>
      <span style={{ minWidth: "15px", textAlign: "center" }}>{count}</span>
      <button onClick={sumar} style={{ color: "green" }} disabled={count === maxQuantity}>
        +
      </button>
      <button onClick={handleClick}>Agregar</button>
    </div>
  );
}