import { useState } from "react";

export default function ButtonCount({ onConfirm, maxQuantity }) {
  const [count, setCount] = useState(0);

  const sumar = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleClick = () => {
    onConfirm(count);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0,5px" }}>
      <button onClick={restar} style={{color:"red"}} disabled={count === 0}>-</button>
      <span style={{ minWidth: "15px", textAlign: "center" }}>{count}</span>
      <button onClick={sumar} style={{color:"green"}} disabled={count === maxQuantity}>+</button>
      <button onClick={handleClick}>Agregar</button>
    </div>
  );
}