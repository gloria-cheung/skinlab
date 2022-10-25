import { Col, Card } from "react-bootstrap";
import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
  Search,
} from "@material-ui/icons";
import "./ProductItem.scss";

const ProductItem = (props) => {
  const { img } = props;

  return (
    <Col lg={3} className="p-1">
      <Card className="productItemContainer">
        <img src={img} alt="productitem" className="productItem" />
        <div className="productItemIcons">
          <FavoriteBorderOutlined className="productItemIcon" />
          <ShoppingCartOutlined className="productItemIcon" />
          <Search className="productItemIcon" />
        </div>
      </Card>
    </Col>
  );
};

export default ProductItem;
