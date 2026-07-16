import "./Closet.css";

function Closet() {

  const clothes = [
  {
    name: "Cream Knit Sweater",
    category: "Top",
    style: "Soft Classic",
    color: "Cream",
    season: "Fall / Winter",
    emoji: "🤍"
  },

  {
    name: "Black Cargo Pants",
    category: "Bottom",
    style: "Streetwear",
    color: "Black",
    season: "All Season",
    emoji: "🖤"
  },

  {
    name: "White Sneakers",
    category: "Shoes",
    style: "Clean Girl",
    color: "White",
    season: "Spring / Summer",
    emoji: "👟"
  },

  {
    name: "Gold Jewelry",
    category: "Accessory",
    style: "Elegant",
    color: "Gold",
    season: "All Season",
    emoji: "✨"
  }
];


  return (
    <div className="closet-page">

      <h1>My Closet</h1>

      <button>
        + Add New Item
      </button>


      <div className="clothing-grid">

        {clothes.map((item, index) => (

          <div className="clothing-card" key={index}>

            <div className="image">
              {item.emoji}
            </div>

          <h2>
  {item.name}
</h2>

<p>
  Category: {item.category}
</p>

<p>
  Style: {item.style}
</p>

<p>
  Color: {item.color}
</p>

<p>
  Season: {item.season}
</p>
          

          </div>

        ))}

      </div>

    </div>
  );
}

export default Closet;
