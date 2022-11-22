import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ProductItem from "./ProductItem";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Products.scss";

const Products = (props) => {
  const { home } = props;
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = category
          ? await axios.get(`/categories/${category}`)
          : await axios.get("/categories/featured");

        setProducts(res.data.products);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [category]);

  const sortHandler = (e) => {
    if (e.target.value === "new") {
      const sortedProducts = [...products].sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      });
      setProducts(sortedProducts);
    } else if (e.target.value === "priceLow") {
      const sortedProducts = [...products].sort((p1, p2) => {
        return p1.price - p2.price;
      });
      setProducts(sortedProducts);
    } else if (e.target.value === "priceHigh") {
      const sortedProducts = [...products].sort((p1, p2) => {
        return p2.price - p1.price;
      });
      setProducts(sortedProducts);
    }
  };

  return (
    <>
      {home ? (
        <h2 className="basicHeader">Featured Items</h2>
      ) : (
        <header className="productsPageHeader">
          <h2 className="basicHeader">Acne</h2>
          <div id="filterSortContainer">
            <div className="leftContainer">
              <h5>Filter Products:</h5>
              <select name="clean" id="filter-clean">
                <option value="">Clean</option>
                <option value="crueltyfree">Cruelty Free</option>
              </select>
              <select name="size" id="filter-size">
                <option value="">Size</option>
                <option value="travel">Travel Size</option>
                <option value="regular">Regular Size</option>
                <option value="value">Value Size</option>
              </select>
            </div>
            <div className="rightContainer">
              <h5>Sort Products:</h5>
              <select
                name="sort"
                id="sort-newest"
                onChange={(e) => {
                  sortHandler(e);
                }}
              >
                <option value="">Sort By</option>
                <option value="new">Newest</option>
                <option value="priceLow">Price (low-high)</option>
                <option value="priceHigh">Price (high-low)</option>
              </select>
            </div>
          </div>
        </header>
      )}
      <Row className="ms-1 me-1">
        {products &&
          products.map((item) => <ProductItem key={item.id} {...item} />)}
      </Row>
    </>
  );
};

export default Products;
