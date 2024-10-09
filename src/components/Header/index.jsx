import { Link } from 'react-router-dom'
import  './style.css'

const Header = () => {
  return (
    <>
    <span>Digital Circus Episode 3 merchandise is here! Get your spoooOOOoooOOoky products in time for Halloween!</span>
    
    <header>
      <img
        className="logo"
        src="https://glitchproductions.store/cdn/shop/files/NewGlitchLogo_Black_Official_73356ee0-2719-447a-a844-46142e204247.png?v=1702366314"
        alt=""
      />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>The Amazing Digital Circus</li>
          <li>Murder Drones</li>
          <li>Glitch Classics</li>
          <li><Link to="/collections">Catalogue</Link></li>
          <li>Animatez</li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Header;
