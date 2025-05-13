import CartItem from "./CartItem";
import "./Cart.css";

export default function Cart() {
  return (
    <section className="cart">
      <h2>Cart</h2>
      <p>Your cart is empty :(</p>
      <ul></ul>
    </section>
  );
}
