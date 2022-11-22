import Topbar from "../components/Topbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import OrderSummary from "../components/OrderSummary";
import CartHeader from "../components/CartHeader";
import CartContainer from "../components/CartContainer";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/cart");
        setCart(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const updateCart = async () => {
    try {
      const res = await axios.get("/cart");
      setCart(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Announcement />
      <Topbar />
      <CartHeader />
      <Row className="w-100">
        <Col md={8}>
          <CartContainer cart={cart} updateCart={updateCart} />
        </Col>
        <Col md={4}>{cart && <OrderSummary total={cart.cart.total} />}</Col>
      </Row>
      <Footer />
    </>
  );
};

export default Cart;
