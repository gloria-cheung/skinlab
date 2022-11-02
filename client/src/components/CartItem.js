import { Container, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  updateProductAddOne,
  updateProductSubtractOne,
} from "../redux/cartRedux";
import "./CartItem.scss";

const CartItem = (props) => {
  const { _id, title, price, size, img, quantity } = props;
  const dispatch = useDispatch();

  const handleAddQuantity = () => {
    dispatch(updateProductAddOne({ ...props, quantity: quantity + 1 }));
  };

  const handleMinusQuantity = () => {
    dispatch(updateProductSubtractOne({ ...props, quantity: quantity - 1 }));
  };

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
            <Button variant="light" onClick={handleMinusQuantity}>
              -
            </Button>
            <span>{quantity}</span>
            <Button variant="light" onClick={handleAddQuantity}>
              +
            </Button>
          </div>
          <div className="cartItemPrice">${price}</div>
        </div>
      </div>
      <div className="rightCart">
        <div className="addRemove">
          <Button variant="light" onClick={handleMinusQuantity}>
            -
          </Button>
          <span>{quantity}</span>
          <Button variant="light" onClick={handleAddQuantity}>
            +
          </Button>
        </div>
        <div className="cartItemPrice">${price}</div>
      </div>
    </Container>
  );
};

export default CartItem;
