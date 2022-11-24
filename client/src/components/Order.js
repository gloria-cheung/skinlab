import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import OrderItem from "./OrderItem";
import { CartContext } from "../context/cart/CartContext";

const Order = () => {
  const search = useLocation().search;
  const order_id = new URLSearchParams(search).get("order_id");
  const [order, setOrder] = useState();
  const { cartDispatch } = useContext(CartContext);

  useEffect(() => {
    const clearCart = async () => {
      try {
        await axios.patch("/cart");
        cartDispatch({ type: "DELETE_CART_SUCCESS" });
      } catch (err) {
        console.log(err);
      }
    };

    const fetchData = async () => {
      try {
        const res = await axios.get(`/orders/${order_id}`);
        setOrder(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    clearCart();
    fetchData();
  }, [order_id, cartDispatch]);

  return (
    <Container className="mt-3">
      <Container className="m-0 p-0 justify-content-between d-flex align-items-end">
        <h2>Thank you for ordering!</h2>
        <Link to="/">
          <Button variant="secondary">Continue Shopping</Button>
        </Link>
      </Container>
      <h5>Order Details:</h5>

      <Container className="mt-3">
        {order &&
          order.order_items.map((item) => (
            <OrderItem key={item.id} product={item.product} {...item} />
          ))}
      </Container>
    </Container>
  );
};

export default Order;
