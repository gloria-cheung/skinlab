import { Container, Button } from "react-bootstrap";
import "./ProductDetails.scss";

const ProductDetails = () => {
  return (
    <Container className="d-flex mt-5 productDetailsContainer">
      <div className="leftContainer">
        <img
          src="https://images.unsplash.com/photo-1599305090598-fe179d501227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNraW5jYXJlJTIwcHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="productImg"
          className="productImg"
        />
      </div>
      <div className="rightContainer">
        <h2>Lotion with 30 SPF</h2>
        <p>
          This cream restores younger-, revived-looking skin. Lines, wrinkles,
          and sun damage appear reduced and skin feels strengthened and
          moisturized. Abundant with proteins and nutrients, it replenishes and
          restores skin to a visibly strong, healthy state. It has a pH of 4.0.
          This cream is free of essential oils, silicones, and fragrance. Skin
          Lab is committed to using only ingredients that either directly
          benefit the health of the skin or support the integrity of their
          formulations. The brand focuses on healthy pH levels, formulations the
          skin recognizes, small molecular structure that’s easily absorbed, and
          effective active ingredients that also support the skin’s acid mantle.
          The result is skin that is reset to its happiest, healthiest state.
          This item is cruelty-free.
        </p>
        <h4>$20</h4>
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
    </Container>
  );
};

export default ProductDetails;
