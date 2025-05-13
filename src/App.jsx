import { useState } from "react";
import PLANTS from "./data";
import Cart from "./Components/Cart/Cart";
import PlantsCatalog from "./Components/Plants/PlantsCatalog";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart((initialCart) => {
      const item = initialCart.find((i) => i.id === plant.id);
      if (item) {
        return initialCart.map((i) =>
          i.id === plant.id ? { ...i, count: i.count + 1 } : i
        );
      }
      return [...initialCart, { ...plant, count: 1 }];
    });
  };

  const removeFromCart = (plant) => {
    setCart((initialCart) => {
      return initialCart
        .map((i) => (i.id === plant.id ? { ...i, count: i.count - 1 } : i))
        .filter((i) => i.count > 0);
    });
  };

  return (
    <>
      <header>
        <h1>Proper Plants</h1>
      </header>
      <main>
        <PlantsCatalog plants={PLANTS} addToCart={addToCart} />
        <Cart
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </main>
    </>
  );
}
