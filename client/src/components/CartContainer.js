import { Container } from "react-bootstrap";
import CartItem from "./CartItem";
import "./CartContainer.scss";

const CartContainer = (props) => {
  const { cart } = props;

  return (
    <Container>
      {cart && cart.cart_items.length ? (
        cart.cart_items.map((item) => (
          <CartItem {...item} product={item.product} key={item.id} />
        ))
      ) : (
        <h2 className="emptyCart">Your cart is currently empty.</h2>
      )}
    </Container>
  );
};

export default CartContainer;
