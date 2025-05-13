import { useState } from "react";
import PLANTS from "./data";
import Cart from "./Components/Cart/Cart";
import PlantsCatalog from "./Components/Plants/PlantsCatalog";

export default function App() {
  const [cart, setCart] = useState(null);
  
  return (
    <>
      <header>
        <h1>Proper Plants</h1>
      </header>
      <main>
        <PlantsCatalog plants={PLANTS} />
        <Cart cart={cart} />
      </main>
    </>
  );
}
