import { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import Topbar from "../components/Topbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import {
  Spinner,
  Col,
  Row,
  Form,
  Button,
  Alert,
  Container,
} from "react-bootstrap";
import axios from "axios";
import { AuthContext } from "../context/auth/AuthContext";
import { CartContext } from "../context/cart/CartContext";
import "./Login.scss";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const history = useHistory();
  const { isFetching, error, dispatch } = useContext(AuthContext);
  const { cartDispatch } = useContext(CartContext);

  const clickHandler = async (e) => {
    try {
      e.preventDefault();

      dispatch({ type: "LOGIN_START" });
      const res = await axios.post("/auth/login", {
        email: email.current.value,
        password: password.current.value,
      });

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.message });
    }

    try {
      cartDispatch({ type: "CREATE_CART_START" });
      let res2 = await axios.get("/cart");
      if (res2.data.error) {
        // create cart if there is none that belongs to user with that id
        res2 = await axios.post("/cart");
      }

      cartDispatch({ type: "CREATE_CART_SUCCESS", payload: res2.data });

      history.push("/");
    } catch (err) {
      cartDispatch({ type: "CREATE_CART_FAILURE", payload: err.message });
    }
  };

  return (
    <>
      <Announcement />
      <Topbar />
      <Container className="d-flex justify-content-center loginRegisterContainer">
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="title">Skin Lab.</h1>
            <h3 className="description">
              Clinical formulations with integrity
            </h3>
          </Col>
          <Col md={6}>
            <Form className="pb-3" onSubmit={clickHandler}>
              <Form.Control
                className="mt-3 mb-3"
                type="email"
                placeholder="Email"
                required
                ref={email}
              />

              <Form.Control
                className="mt-3 mb-3"
                type="password"
                placeholder="Password"
                minLength={6}
                required
                ref={password}
              />

              <div className="d-grid gap-2">
                <Button type="submit" variant="primary" disabled={isFetching}>
                  {isFetching ? (
                    <Spinner animation="border" size="sm" variant="light" />
                  ) : (
                    "Login"
                  )}
                </Button>
              </div>
              {error && (
                <Alert className="mt-3 pt-1 pb-1 text-center" variant="error">
                  Error, Please Try Again
                </Alert>
              )}
            </Form>
            <p>Dont have an Account? </p>
            <div className="d-grid gap-2">
              <Button
                as="a"
                href="/register"
                variant="light"
                disabled={isFetching}
              >
                Create New Account
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
