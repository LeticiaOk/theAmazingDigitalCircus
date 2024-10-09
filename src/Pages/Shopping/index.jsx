import { useState } from "react";
import data from "../../data/data.json";
import "./style.css";
export default function Shopping() {

  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleMouseEnter = (id) => setHoveredProductId(id);
  const handleMouseLeave = () => setHoveredProductId(null);

  return (
    <>
      <section className="banner">
        <img className="collections-banner" src="https://cdn.shopify.com/s/files/1/0786/4903/3026/collections/i.png?v=1702349007" alt="the amazing digital circus"></img>
        <h1 className="collections-title">THE AMAZING DIGITAL CIRCUS</h1>
      </section>

      <section className="products-collection">
        {data.map((product, index) => (
          <div key={index} className="product-collection">
            <img
              src={hoveredProductId === product.id ? product.image.collections_after : product.image.collections_before}
              onMouseEnter={() => handleMouseEnter(product.id)}
              onMouseLeave={handleMouseLeave}
              className="product-img-collection" />
            <p className="product-name">{product.name}</p>
            <p className="product-price">R${product.price.toFixed(2)}</p>
          </div>
        ))}
      </section>
    </>
  )
}
