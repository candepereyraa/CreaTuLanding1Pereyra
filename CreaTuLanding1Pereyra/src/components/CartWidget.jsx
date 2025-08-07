import { useCart } from "./CartContext";
function CartWidget(){
  const {cartCount} = useCart();
    return (
    <span>🛒 {cartCount}</span>
  );
}
export default CartWidget;