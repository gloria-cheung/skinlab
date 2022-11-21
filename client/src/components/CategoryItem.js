import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CategoryItem.scss";

const CategoryItem = (props) => {
  const { img, name } = props;

  return (
    <Col md={4} className="p-1">
      <Card className="text-white border-none">
        <Card.Img src={img} alt="category" className="categoryImg" />
        <Card.ImgOverlay className="categoryTextContainer p-0">
          <Card.Title as="h2">{name}</Card.Title>
          <Link to={`/productlist/${name.toLowerCase()}`}>
            <Button size="sm" variant="light">
              Shop Now
            </Button>
          </Link>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
};

export default CategoryItem;
