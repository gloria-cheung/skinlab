import { Container } from "react-bootstrap";

const OrderItem = (props) => {
  const { product, quantity } = props;

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
        <p>
          <b>Quantity:</b> {quantity}
        </p>
      </div>
      <div className="rightCart">
        <div className="cartItemPrice">${product.price}</div>
      </div>
    </Container>
  );
};

export default OrderItem;
