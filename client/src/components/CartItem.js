import { Container, Button } from "react-bootstrap";
import "./CartItem.scss";

const CartItem = (props) => {
  const { _id, title, price, size, img } = props;

  return (
    <Container className="cartBody">
      <div className="leftCart">
        <img src={img} alt={title} />
      </div>
      <div className="middleCart">
        <p>
          <b>Product:</b> {title}
        </p>
        <p>
          <b>ID:</b> {_id}
        </p>
        <p>
          <b>Size:</b> {size}
        </p>
        <div className="bottomCartMobile">
          <div className="addRemove">
            <Button variant="light">-</Button>
            <span>1</span>
            <Button variant="light">+</Button>
          </div>
          <div className="cartItemPrice">${price}</div>
        </div>
      </div>
      <div className="rightCart">
        <div className="addRemove">
          <Button variant="light">-</Button>
          <span>1</span>
          <Button variant="light">+</Button>
        </div>
        <div className="cartItemPrice">${price}</div>
      </div>
    </Container>
  );
};

export default CartItem;
