import { Col, Card } from "react-bootstrap";
import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
  Search,
} from "@material-ui/icons";
import "./ProductItem.scss";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const { img_url, id, price } = props;

  const handleClick = () => {};
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
