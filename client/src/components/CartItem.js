import { Container, Button } from "react-bootstrap";
import axios from "axios";
import "./CartItem.scss";

const CartItem = (props) => {
  const { id, product, quantity, updateCart } = props;

  const handleAddQuantity = async () => {
    try {
      await axios.patch(`/cart_items/${id}`, {
        quantity: quantity + 1,
      });
      updateCart();
    } catch (err) {
      console.log(err);
    }
  };

  const handleMinusQuantity = async () => {
    try {
      await axios.patch(`/cart_items/${id}`, {
        quantity: quantity - 1,
      });
      updateCart();
    } catch (err) {
      console.log(err);
    }
  };

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

        <div className="bottomCartMobile">
          <div className="addRemove">
            <Button variant="light" onClick={handleMinusQuantity}>
              -
            </Button>
            <span>{product.quantity}</span>
            <Button variant="light" onClick={handleAddQuantity}>
              +
            </Button>
          </div>
          <div className="cartItemPrice">${product.price}</div>
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
        <div className="cartItemPrice">${product.price}</div>
      </div>
    </Container>
  );
};

export default CartItem;
