import { useEffect, useState } from "react";
import "../App.css";

function ProductsSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="header2 text-center">
      <div>
        <h1
          style={{
            fontFamily: '"Volkhov", serif',
            fontWeight: 400,
            fontSize: "46px",
            color: "#484848",
          }}
        >
          New Arrivals
        </h1>

        <p
          style={{
            fontFamily: '"poppins", serif',
            fontWeight: 400,
            fontSize: "16px",
            color: "#8A8A8A",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis <br />
          ultrices sollicitudin aliquam sem.
        </p>
      </div>

      <div>
        <CategoryTabs onSelect={(cat) => console.log(cat)} />
      </div>

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4 products-grid">
          {products.map((item) => (
            <div className="col" key={item.id}>
              <div className="card">
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />

                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p className="brand">{item.category}</p>
                  <p className="reviews">(4.1k) Customer Reviews</p>

                  <div className="price-row">
                    <span className="price">${item.price}</span>
                    <span className="sold">Almost Sold Out</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductsSection;