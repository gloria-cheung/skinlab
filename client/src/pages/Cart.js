import Topbar from "../components/Topbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import OrderSummary from "../components/OrderSummary";
import CartHeader from "../components/CartHeader";
import CartContainer from "../components/CartContainer";
import { Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/cart/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Announcement />
      <Topbar />
      {cart && <CartHeader quantity={cart.cart_items.length} />}
      <Row className="w-100">
        <Col md={8}>
          <CartContainer cart={cart} />
        </Col>
        <Col md={4}>{cart && <OrderSummary total={cart.cart.total} />}</Col>
      </Row>
      <Footer />
    </>
  );
};

export default Cart;
