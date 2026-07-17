function ClothingCard({ item }) {
  return (
    <div className="clothing-card">
      <div className="image">
        {item.image}
      </div>

      <h2>{item.name}</h2>

      <p>Category: {item.category}</p>
      <p>Style: {item.style}</p>
      <p>Color: {item.color}</p>
      <p>Season: {item.season}</p>
    </div>
  );
}

export default ClothingCard;
