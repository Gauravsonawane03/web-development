import { useState } from "react";
function QuantityCart() {
  const [quantity, setQuantity] = useState(1);
  const price = 500;
  return (
  <div>
    <h2>Quantity: {quantity}</h2>
    <p>Total: ₹{price * quantity}</p>
    <button onClick={() => setQuantity(quantity + 1)}>+</button>
   <button onClick={() => {
  if (quantity > 1) {
    setQuantity(quantity - 1);
  }
}}>
  -
</button>
  </div>
);
}
export default QuantityCart;