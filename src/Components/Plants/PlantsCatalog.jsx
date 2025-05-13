import PlantCard from "./PlantCard";
import "./Plants.css";

export default function PlantsCatalog({ plants, addToCart }) {
  return (
    <section className="plants">
      <h2>Plants</h2>
      <ul>
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </ul>
    </section>
  );
}
