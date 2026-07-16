function Home() {
  return (
    <div className="home-page">

      <section className="hero">

        <div className="hero-text">

          <p className="subtitle">
            PERSONAL STYLE ARCHIVE
          </p>

          <h2>
            Your wardrobe.
            <br />
            Your aesthetic.
            <br />
            Your story.
          </h2>

          <p className="description">
            A personal digital closet inspired by
            fashion editorials and Pinterest moodboards.
          </p>

          <button>
            Explore My Closet
          </button>

        </div>


        <div className="hero-image">
          <p>
            Fashion Inspiration
          </p>
        </div>

      </section>


      <section className="collections">

        <h3>
          My Collections
        </h3>


        <div className="cards">

          <div className="card">
            <span>👗</span>
            <h4>Tops</h4>
            <p>Blouses, sweaters, shirts</p>
          </div>


          <div className="card">
            <span>👖</span>
            <h4>Bottoms</h4>
            <p>Jeans, skirts, pants</p>
          </div>


          <div className="card">
            <span>👟</span>
            <h4>Shoes</h4>
            <p>Sneakers, heels, boots</p>
          </div>


          <div className="card">
            <span>✨</span>
            <h4>Accessories</h4>
            <p>Jewelry and extras</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;
