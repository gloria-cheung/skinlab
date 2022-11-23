import { Container, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth/AuthContext";
import { CartContext } from "../context/cart/CartContext";
import "./ProductDetails.scss";

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { currentUser } = useContext(AuthContext);
  const { cartDispatch } = useContext(CartContext);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

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

  return (
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
          </div>
        </>
      )}
    </Container>
  );
};

export default ProductDetails;
