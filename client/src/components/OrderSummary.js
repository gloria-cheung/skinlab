import { Card, Button } from "react-bootstrap";
import "./OrderSummary.scss";

const OrderSummary = (props) => {
  const { total } = props;

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
            <Button variant="dark" className="checkoutButton">
              Checkout Now
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default OrderSummary;
