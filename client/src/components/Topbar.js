import { Nav, Navbar, Form, InputGroup } from "react-bootstrap";
import { ShoppingCartOutlined, Search } from "@material-ui/icons";
import "./Topbar.scss";
import { Link } from "react-router-dom";

const Topbar = () => {
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
          <Link to="/register">
            <Nav.Link as="span" href="#home">
              Register
            </Nav.Link>
          </Link>
          <Link to="/login">
            <Nav.Link as="span" href="#link">
              Sign In
            </Nav.Link>
          </Link>
          <Link to="/cart">
            <Nav.Link as="span" href="#link" className="shoppingCartContainer">
              <ShoppingCartOutlined />
              <span className="badge">2</span>
            </Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Topbar;
