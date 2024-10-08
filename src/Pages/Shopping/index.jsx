import data from "../../data/data.json";
import "./style.css";
export default function Shopping() {
  const [currentProduct, setCurrentProduct] = useState();

  return (
    <>
        <section className="banner">
            <img className="collections-banner" src="https://cdn.shopify.com/s/files/1/0786/4903/3026/collections/i.png?v=1702349007" alt="the amazing digital circus" />
            <h1 className="collections-title">THE AMAZING DIGITAL CIRCUS</h1>
            {data.map((product, index) =>(
              <div key={index}>
                {setCurrentProduct(product)}
                
                  {/* <img
        src={currentImage}
        alt=""
        className="product-image"
        onMouseEnter={() => setCurrentImage(currentProduct.image.preview_after)}
        onMouseLeave={() => setCurrentImage(currentProduct.image.preview_before)}
      />
      <p className="product-name">{currentProduct.name}</p>
      <p className="product-price">R${currentProduct.price.toFixed(2)}</p> */}
              </div>
            ))}
        </section>
    </>
  )
}
