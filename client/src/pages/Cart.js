import Topbar from "../components/Topbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import OrderSummary from "../components/OrderSummary";
import CartHeader from "../components/CartHeader";
import CartContainer from "../components/CartContainer";
import { Row, Col } from "react-bootstrap";

const Cart = () => {
  return (
    <>
      <Announcement />
      <Topbar />
      <CartHeader />
      <Row className="w-100">
        <Col md={8}>
          <CartContainer />
        </Col>
        <Col md={4}>
          <OrderSummary />
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Cart;
