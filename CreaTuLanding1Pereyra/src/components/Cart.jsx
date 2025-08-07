import { useCart } from "./CartContext";
import CheckoutForm from "./CheckoutForm";

function Cart() {
  const { cart, removeProduct } = useCart();
  console.log("Carrito:", cart);

  const total = cart.reduce((acc, product) => acc + product.precio, 0);
  return (
    <div className="contenedor-principal">
      <h1 className="titulo-carrito">Carrito</h1>

      {!cart || cart.length === 0 ? (
        <p className="finalizar">El carrito está vacío.</p>
      ) : (
        <ul className="list-group">
          {cart.map((product, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div className="d-flex align-items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  width="100"
                  className="me-3"
                />
                <span>{product.title} - ${product.price} -cantidad: {product.cantidad} -total: ${product.price * product.cantidad}</span>
              </div>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeProduct(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <CheckoutForm carrito={cart} />
    </div>
  );
}

export default Cart;