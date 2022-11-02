import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CartHeader.scss";
import { useSelector } from "react-redux";

const CartHeader = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className="cartHeader">
      <h2>Your Bag</h2>
      <div className="cartHeaderDetails">
        <Link to="/">
          <Button variant="secondary">Continue Shopping</Button>
        </Link>
        <span>Shopping Bag({quantity})</span>
        <span>Your Wishlist(0)</span>
        <Button variant="dark">Checkout Now</Button>
      </div>
    </div>
  );
};

export default CartHeader;
