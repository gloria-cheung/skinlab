import { Nav, Navbar, Form, InputGroup } from "react-bootstrap";
import { ShoppingCartOutlined, Search } from "@material-ui/icons";
import "./Topbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";
import { CartContext } from "../context/cart/CartContext";
import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Topbar = () => {
  const { currentUser, dispatch } = useContext(AuthContext);
  const { cart, cartDispatch } = useContext(CartContext);
  const history = useHistory();
  const productName = useRef();

  const clickHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/auth/logout");
      dispatch({ type: "LOGOUT_SUCCESS", payload: res.data });
      history.push("/");
    } catch (err) {
      dispatch({ type: "LOGOUT_FAILURE", payload: err.message });
    }

    cartDispatch({ type: "DELETE_CART_SUCCESS" });
    history.push("/");
  };

  const searchHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `/products?name=${productName.current.value}`
      );
      history.push(`/product?product_id=${res.data.id}`);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className="ps-3 pe-3 justify-content-between"
    >
      <Link to="/">
        <Navbar.Brand>SKIN LAB.</Navbar.Brand>
      </Link>
      <Form className="w-50" onSubmit={searchHandler}>
        <InputGroup className="searchBar">
          <InputGroup.Text id="basic-addon1">
            <Search />
          </InputGroup.Text>
          <Form.Control
            placeholder="search"
            aria-describedby="basic-addon1"
            ref={productName}
          />
        </InputGroup>
      </Form>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="w-100 justify-content-end">
          {currentUser ? (
            <>
              <Nav.Link as="span" href="#link">
                HI, {currentUser.first_name.toUpperCase()}!
              </Nav.Link>
              <Nav.Link
                as="span"
                onClick={clickHandler}
                className="logoutButton"
              >
                Logout
              </Nav.Link>
            </>
          ) : (
            <>
              <Link to="/register">
                <Nav.Link as="span" href="#link">
                  Register
                </Nav.Link>
              </Link>
              <Link to="/login">
                <Nav.Link as="span" href="#link">
                  Sign In
                </Nav.Link>
              </Link>
            </>
          )}

          <Link to="/cart">
            <Nav.Link as="span" href="#link" className="shoppingCartContainer">
              <ShoppingCartOutlined />
              <span className="badge">{cart ? cart.cart_items.length : 0}</span>
            </Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Topbar;
