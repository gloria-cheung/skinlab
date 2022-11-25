import { Container, Button, Alert } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth/AuthContext";
import { CartContext } from "../context/cart/CartContext";
import { FavoriteBorderOutlined } from "@material-ui/icons";
import "./ProductDetails.scss";

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState(null);
  const [show, setShow] = useState(false);
  const search = useLocation().search;
  const product_id = new URLSearchParams(search).get("product_id");
  const { currentUser } = useContext(AuthContext);
  const { cartDispatch } = useContext(CartContext);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/products?product_id=${product_id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [product_id]);

  const handleAddQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const handleSubtractQuantity = () => {
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
  };

  const handleClick = async () => {
    if (!currentUser) {
      history.push("/login");
    } else {
      cartDispatch({ type: "ADD_TO_CART_START" });

      try {
        const res = await axios.post("/cart_items", {
          product_id: product.id,
          quantity: quantity,
        });

        cartDispatch({ type: "ADD_TO_CART_SUCCESS", payload: res.data });
      } catch (err) {
        cartDispatch({ type: "ADD_TO_CART_FAILURE", payload: err.message });
      }
    }
  };

  const addToWishlist = async () => {
    if (!currentUser) {
      history.push("/login");
    } else {
      try {
        const res = await axios.get("/wishlist");
        const wishlist_id = res.data.wishlist.id;

        await axios.post(`/wishlist/${wishlist_id}`, {
          product_id: product.id,
          wishlist_id: wishlist_id,
        });
        setMessage("Added to Wishlist");
        setShow(true);
      } catch (err) {
        console.log(err.message);
        setMessage("Something went wrong, please try again");
        setShow(true);
      }
    }
  };

  return (
    <>
      {show && (
        <Alert
          className="text-center"
          variant="dark"
          onClose={() => setShow(false)}
          dismissible
        >
          {message}
        </Alert>
      )}
      <Container className="d-flex mt-5 productDetailsContainer">
        {product && (
          <>
            <div className="leftContainer">
              <img
                src={product.img_url}
                alt="productImg"
                className="productImg"
              />
            </div>
            <div className="rightContainer">
              <h2>{product.name}</h2>
              <p>{product.desc}</p>
              <h4>${product.price}</h4>

              <div className="cartButtons">
                <div className="addRemove">
                  <Button variant="light" onClick={handleSubtractQuantity}>
                    -
                  </Button>
                  <span>{quantity}</span>
                  <Button variant="light" onClick={handleAddQuantity}>
                    +
                  </Button>
                </div>
                <Button variant="secondary" onClick={handleClick}>
                  Add to Cart
                </Button>
              </div>

              <Button
                className="mt-3 ps-5 pe-5 wishlistButton"
                variant="primary"
                onClick={addToWishlist}
              >
                <FavoriteBorderOutlined className="wishlistIcon" />
                Add to Wishlist
              </Button>
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default ProductDetails;
