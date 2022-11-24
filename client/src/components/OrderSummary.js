import { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import axios from "axios";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./OrderSummary.scss";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE);

const OrderSummary = (props) => {
  const { total } = props;
  const [clientSecret, setClientSecret] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const clickHandler = async () => {
    handleShow();

    try {
      const res = await axios.post("/create-checkout-session", {
        amount: total * 100,
      });
      setClientSecret(res.data.clientSecret);
    } catch (err) {
      console.log(err.message);
    }
  };

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      <Card className="border-0">
        <Card.Body>
          <Card.Title className="orderSummaryTitle mb-4">
            Order Summary
          </Card.Title>
          <Card.Text className="orderSummaryLine">
            <span>Subtotal:</span>
            <span>${total}</span>
          </Card.Text>
          <Card.Text className="orderSummaryLine">
            <span>Estimated Shipping:</span>
            <span>$6.99</span>
          </Card.Text>
          <Card.Text className="orderSummaryLine">
            <span>Shipping Discount:</span>
            <span>$-6.99</span>
          </Card.Text>
          <Card.Text className="orderSummaryLine orderSummaryTotal">
            <span>Total:</span>
            <span>${total}</span>
          </Card.Text>
          <div className="d-grid gap-2">
            <Button
              variant="dark"
              className="checkoutButton"
              onClick={clickHandler}
            >
              Checkout Now
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Total: ${total}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default OrderSummary;
