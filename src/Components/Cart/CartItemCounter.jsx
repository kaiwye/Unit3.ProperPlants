export default function CartItemCounter({ item, removeFromCart, addToCart }) {
  return (
    <div className="cart-item-counter">
      <button onClick={() => removeFromCart(item)}>-</button>
      <span>{item.count}</span>
      <button onClick={() => addToCart(item)}>+</button>
    </div>
  );
}
