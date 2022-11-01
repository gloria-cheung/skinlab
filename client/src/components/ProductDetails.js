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
  const [size, setSize] = useState();
  const [price, setPrice] = useState();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/products/${id}`);
        setProduct(res.data);
        // default to regular size and price
        setPrice(res.data.price[1]);
        setSize(res.data.size[1]);
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
    dispatch(addProduct({ ...product, quantity, size, price }));
  };
  const handleSize = (e) => {
    if (e.target.value === "regular") {
      setSize("regular");
      setPrice(product.price[1]);
    } else if (e.target.value === "travel") {
      setSize("travel");
      setPrice(product.price[0]);
    } else if (e.target.value === "value") {
      setSize("value");
      setPrice(product.price[2]);
    }
  };
  console.log(product);
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
            <h4>${price}</h4>
            <select
              name="size"
              id="filter-size"
              onChange={(e) => handleSize(e)}
              defaultValue={"regular"}
            >
              <option value="">Size</option>
              <option value="travel">Travel Size</option>
              <option value="regular">Regular Size</option>
              <option value="value">Value Size</option>
            </select>
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
