import { Container, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ProductDetails.scss";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();

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

  const handleAddQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const handleSubtractQuantity = () => {
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
  };

  const handleClick = () => {
    // dispatch(addProduct({ ...product, quantity, size, price }));
  };

  console.log(product);
  return (
    <Container className="d-flex mt-5 productDetailsContainer">
      {product && (
        <>
          <div className="leftContainer">
            <img
              src={product.img_url}
              alt="productImg"
              className="productImg"
            />
          </div>
          <div className="rightContainer">
            <h2>{product.name}</h2>
            <p>{product.desc}</p>
            <h4>${product.price}</h4>

            <div className="cartButtons">
              <div className="addRemove">
                <Button variant="light" onClick={handleSubtractQuantity}>
                  -
                </Button>
                <span>{quantity}</span>
                <Button variant="light" onClick={handleAddQuantity}>
                  +
                </Button>
              </div>
              <Button variant="secondary" onClick={handleClick}>
                Add to Cart
              </Button>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default ProductDetails;
