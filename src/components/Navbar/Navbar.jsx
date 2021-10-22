import './Navbar.css';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <nav>
      <h1 data-testid="navbartst">Dashboard</h1>
      <h2>Cart - {cart.count}</h2>
      <Link to="/bots/cart">
        <button>
          <FontAwesomeIcon
            size="2x"
            className="cart-icon"
            icon={faShoppingCart}
          />
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
