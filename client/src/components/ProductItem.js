import { Col, Card } from "react-bootstrap";
import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
  Search,
} from "@material-ui/icons";
import "./ProductItem.scss";
import { Link } from "react-router-dom";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const ProductItem = (props) => {
  const { img, _id, price } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addProduct({ product: props, quantity: 1, price }));
  };
  return (
    <Col lg={3} className="p-1">
      <Card className="productItemContainer">
        <img src={img} alt="productitem" className="productItem" />
        <div className="productItemIcons">
          <FavoriteBorderOutlined className="productItemIcon" />
          <ShoppingCartOutlined
            className="productItemIcon"
            onClick={handleClick}
          />
          <Link to={`/product/${_id}`}>
            <Search className="productItemIcon" />
          </Link>
        </div>
      </Card>
    </Col>
  );
};

export default ProductItem;
