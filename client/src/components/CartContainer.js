import { Container } from "react-bootstrap";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartContainer = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <Container>
      {cart.products.length ? (
        cart.products.map((item) => <CartItem {...item} key={item._id} />)
      ) : (
        <h2>Your cart is currently empty.</h2>
      )}
    </Container>
  );
};

export default CartContainer;
