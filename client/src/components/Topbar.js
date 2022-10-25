import { Nav, Navbar, Form, InputGroup } from "react-bootstrap";
import { ShoppingCartOutlined, Search } from "@material-ui/icons";
import "./Topbar.scss";

const Topbar = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      sticky="top"
      className="ps-3 pe-3 justify-content-between"
    >
      <Navbar.Brand>Skin Lab</Navbar.Brand>
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
          <Nav.Link as="span" href="#home">
            Register
          </Nav.Link>
          <Nav.Link as="span" href="#link">
            Sign In
          </Nav.Link>
          <Nav.Link as="span" href="#link" className="shoppingCartContainer">
            <ShoppingCartOutlined />
            <span className="badge">2</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Topbar;
