import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CartHeader.scss";
import axios from "axios";

const CartHeader = (props) => {
  const { quantity } = props;
  const [wishlistQty, setWishlistQty] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/wishlist");
        setWishlistQty(res.data.wishlist_items.length);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="cartHeader">
      <h2>Your Bag</h2>
      <div className="cartHeaderDetails">
        <Link to="/">
          <Button variant="secondary">Continue Shopping</Button>
        </Link>
        <span>Shopping Bag({quantity})</span>
        <Link to="/wishlist">
          <span>Your Wishlist({wishlistQty})</span>
        </Link>
        <Button variant="dark">Checkout Now</Button>
      </div>
    </div>
  );
};

export default CartHeader;
