import { Nav, Navbar, Form, InputGroup } from "react-bootstrap";
import { ShoppingCartOutlined, Search } from "@material-ui/icons";
import "./Topbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Topbar = () => {
  const { currentUser, dispatch } = useContext(AuthContext);
  const history = useHistory();
  const quantity = 0;

  const clickHandler = async (e) => {
    try {
      e.preventDefault();

      const res = await axios.post("/auth/logout");
      dispatch({ type: "LOGOUT_SUCCESS", payload: res.data });
      history.push("/");
    } catch (err) {
      dispatch({ type: "LOGOUT_FAILURE", payload: err.message });
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
      <Form className="w-50">
        <InputGroup className="searchBar">
          <InputGroup.Text id="basic-addon1">
            <Search />
          </InputGroup.Text>
          <Form.Control placeholder="search" aria-describedby="basic-addon1" />
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
              <span className="badge">{quantity}</span>
            </Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Topbar;
