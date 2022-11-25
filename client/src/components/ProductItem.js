import { useContext } from "react";
import { CartContext } from "../context/cart/CartContext";
import { AuthContext } from "../context/auth/AuthContext";
import { Col, Card } from "react-bootstrap";
import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
  Search,
  DeleteOutlined,
} from "@material-ui/icons";
import "./ProductItem.scss";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const ProductItem = (props) => {
  const { img_url, id, setMessage, setShow, path, wishlist_item_id } = props;
  const { cartDispatch } = useContext(CartContext);
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  const deleteFromWishlist = async () => {
    try {
      await axios.delete(`/wishlist/${wishlist_item_id}`);
      history.push("/wishlist");
    } catch (err) {
      console.log(err.message);
    }
  };

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

      deleteFromWishlist();
      history.push("/cart");
    }
  };

  const addToWishlist = async () => {
    if (!currentUser) {
      history.push("/login");
    } else {
      try {
        const res = await axios.get("/wishlist");
        const wishlist_id = res.data.wishlist.id;

        await axios.post(`/wishlist/${wishlist_id}`, {
          product_id: id,
          wishlist_id: wishlist_id,
        });
        setMessage("Added to Wishlist");
        setShow(true);
      } catch (err) {
        console.log(err.message);
        setMessage("Something went wrong, please try again");
        setShow(true);
      }
    }
  };

  return (
    <Col lg={3} className="p-1">
      <Card className="productItemContainer">
        <img src={img_url} alt="productitem" className="productItem" />
        <div className="productItemIcons">
          {path === "wishlist" ? (
            <DeleteOutlined
              className="productItemIcon"
              onClick={deleteFromWishlist}
            />
          ) : (
            <FavoriteBorderOutlined
              className="productItemIcon"
              onClick={addToWishlist}
            />
          )}
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
