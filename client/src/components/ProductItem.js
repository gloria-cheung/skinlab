import { useContext } from "react";
import { CartContext } from "../context/cart/CartContext";
import { AuthContext } from "../context/auth/AuthContext";
import { Col, Card } from "react-bootstrap";
import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
  Search,
} from "@material-ui/icons";
import "./ProductItem.scss";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const ProductItem = (props) => {
  const { img_url, id } = props;
  const { cartDispatch } = useContext(CartContext);
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  const handleClick = async () => {
    if (!currentUser) {
      history.push("/login");
    } else {
      cartDispatch({ type: "ADD_TO_CART_START" });

      try {
        const res = await axios.post("/cart_items", {
          product_id: id,
          quantity: 1,
        });

        cartDispatch({ type: "ADD_TO_CART_SUCCESS", payload: res.data });
      } catch (err) {
        cartDispatch({ type: "ADD_TO_CART_FAILURE", payload: err.message });
      }
    }
  };
  return (
    <Col lg={3} className="p-1">
      <Card className="productItemContainer">
        <img src={img_url} alt="productitem" className="productItem" />
        <div className="productItemIcons">
          <FavoriteBorderOutlined className="productItemIcon" />
          <ShoppingCartOutlined
            className="productItemIcon"
            onClick={handleClick}
          />
          <Link to={`/product/${id}`}>
            <Search className="productItemIcon" />
          </Link>
        </div>
      </Card>
    </Col>
  );
};

export default ProductItem;
