import "./Closet.css";
import clothes from "../data/clothes";
import ClothingCard from "../components/ClothingCard";

function Closet() {
  return (
    <div className="closet-page">
      <h1>My Closet</h1>

      <button>+ Add New Item</button>

      <div className="clothing-grid">
        {clothes.map((item) => (
          <ClothingCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export default Closet;
