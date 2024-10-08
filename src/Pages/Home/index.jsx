import { Link } from 'react-router-dom'
import Product from "../../components/Product";
import "./style.css";

const Home = () => {
  return (
    <div className="background">
      <video
        src="https://i.shgcdn.com/15a544d5-d98f-4fb3-996a-a7fec9dee1e0/gif2video/-/format/webm/-/quality/lighter/"
        autoPlay
        muted
        loop
      />
      <h1 className='preview-title'>NEW ARRIVALS</h1>
      <section className="products">
        <Product name="Big Pomni Plush" />
        <Product name="Angel Plush" />
        <Product name="Kinger Keychain Plush" />
        <Product name="Kinger Animatez" />
        <Product name="Zooble Animatez" />
        <Product name="Pomni Jacket" />
        <Product name="Kinger Tote Bag" />
        <Product name="Digital Circus Notebook" />
        <Product name="Checkmates Socks" />
        <Product name="Kinger Plush" />
      </section>

      <img className="main-character-series-banner" src="https://i.shgcdn.com/d779d780-c5c8-48a6-818e-ab777da7967f/-/format/auto/-/preview/3000x3000/-/quality/best/" alt=""/>

      <h1 className='preview-title'>BEST SELLERS</h1>
      <section className="products"> 
      <Product name="Pomni Plush" />
      <Product name="Jax Plush" />
      <Product name="Gummigoo Plush" />
      <Product name="Pomni Animatez" />
      <Product name="The Amazing Digital Circus Poster" />
      <Product name='Jax "Iconic Quote" Jumper'/>
      <Product name="Pomni Keychain" />
      <Product name="Gummigoo Keychain Figurine" />
      </section>

        <button><Link to="/collections">Shop All</Link></button>
    </div>
  );
};

export default Home;
