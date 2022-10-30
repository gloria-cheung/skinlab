import { Container, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ProductDetails.scss";

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  return (
    <Container className="d-flex mt-5 productDetailsContainer">
      {product && (
        <>
          <div className="leftContainer">
            <img src={product.img} alt="productImg" className="productImg" />
          </div>
          <div className="rightContainer">
            <h2>{product.title}</h2>
            <p>{product.desc}</p>
            <h4>${product.price}</h4>
            <select name="size" id="filter-size">
              <option value="">Size</option>
              <option value="travel">Travel Size</option>
              <option value="regular">Regular Size</option>
              <option value="value">Value Size</option>
            </select>
            <div className="cartButtons">
              <div className="addRemove">
                <Button variant="light">-</Button>
                <span>1</span>
                <Button variant="light">+</Button>
              </div>
              <Button variant="secondary">Add to Cart</Button>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default ProductDetails;
