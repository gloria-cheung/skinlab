import { Button } from "react-bootstrap";
import "./CartHeader.scss";

const CartHeader = () => {
  return (
    <div className="cartHeader">
      <h2>Your Bag</h2>
      <div className="cartHeaderDetails">
        <Button variant="secondary">Continue Shopping</Button>
        <span>Shopping Bag(2)</span>
        <span>Your Wishlist(0)</span>
        <Button variant="dark">Checkout Now</Button>
      </div>
    </div>
  );
};

export default CartHeader;
