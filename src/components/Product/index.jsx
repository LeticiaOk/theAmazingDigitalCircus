import { useState } from "react";
import data from "../../data/data.json";
import './style.css'

const Products = ({ name }) => {
  const currentProduct = data.find((product) => product.name == name);

  const [currentImage, setCurrentImage] = useState(
    currentProduct.image.preview_before
  );

  return (
    <div className="product">
      <img
        src={currentImage}
        alt=""
        className="product-image"
        onMouseEnter={() => setCurrentImage(currentProduct.image.preview_after)}
        onMouseLeave={() => setCurrentImage(currentProduct.image.preview_before)}
      />
      <p className="product-name">{currentProduct.name}</p>
      <p className="product-price">R${currentProduct.price.toFixed(2)}</p>
    </div>
  );
};

export default Products;
