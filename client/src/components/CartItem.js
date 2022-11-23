import { Container, Button } from "react-bootstrap";
import axios from "axios";
import { CartContext } from "../context/cart/CartContext";
import { useContext } from "react";
import "./CartItem.scss";

const CartItem = (props) => {
  const { id, product, quantity } = props;
  const { cartDispatch } = useContext(CartContext);

  const handleAddQuantity = async () => {
    cartDispatch({ type: "UPDATE_CART_START" });
    try {
      await axios.patch(`/cart_items/${id}`, {
        quantity: quantity + 1,
      });
      cartDispatch({
        type: "UPDATE_CART_SUCCESS",
        payload: { id: id, quantity: quantity + 1, price: product.price },
      });
    } catch (err) {
      cartDispatch({ type: "UPDATE_CART_FAILURE", payload: err.message });
    }
  };

  const handleMinusQuantity = async () => {
    if (quantity - 1 === 0) {
      cartDispatch({ type: "DELETE_FROM_CART_START" });
      try {
        await axios.delete(`/cart_items/${id}`);
        cartDispatch({
          type: "DELETE_FROM_CART_SUCCESS",
          payload: { id: id, price: product.price },
        });
      } catch (err) {
        cartDispatch({
          type: "DELETE_FROM_CART_FAILURE",
          payload: err.message,
        });
      }
    } else {
      cartDispatch({ type: "UPDATE_CART_START" });
      try {
        await axios.patch(`/cart_items/${id}`, {
          quantity: quantity - 1,
        });
        cartDispatch({
          type: "UPDATE_CART_SUCCESS",
          payload: { id: id, quantity: quantity - 1, price: product.price },
        });
      } catch (err) {
        cartDispatch({ type: "UPDATE_CART_FAILURE", payload: err.message });
      }
    }
  };

  return (
    <Container className="cartBody">
      <div className="leftCart">
        <img src={product.img_url} alt={product.name} />
      </div>
      <div className="middleCart">
        <p>
          <b>Product:</b> {product.name}
        </p>
        <p>
          <b>ID:</b> {product.id}
        </p>

        <div className="bottomCartMobile">
          <div className="addRemove">
            <Button variant="light" onClick={handleMinusQuantity}>
              -
            </Button>
            <span>{product.quantity}</span>
            <Button variant="light" onClick={handleAddQuantity}>
              +
            </Button>
          </div>
          <div className="cartItemPrice">${product.price}</div>
        </div>
      </div>
      <div className="rightCart">
        <div className="addRemove">
          <Button variant="light" onClick={handleMinusQuantity}>
            -
          </Button>
          <span>{quantity}</span>
          <Button variant="light" onClick={handleAddQuantity}>
            +
          </Button>
        </div>
        <div className="cartItemPrice">${product.price}</div>
      </div>
    </Container>
  );
};

export default CartItem;
