import { useState } from "react";
import PLANTS from "./data";
import PlantsCatalog from "./Components/Plants/PlantsCatalog";
import Cart from "./Components/Cart/Cart";

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
