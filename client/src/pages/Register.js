import { useContext, useRef } from "react";
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
import { AuthContext } from "../context/AuthContext";
import "./Register.scss";
import axios from "axios";

const Register = () => {
  const { isFetching, error, dispatch } = useContext(AuthContext);
  const first_name = useRef();
  const last_name = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const history = useHistory();

  const clickHandler = async (e) => {
    e.preventDefault();
    // add validation to see if password matches confirm password
    if (password.current.value !== confirmPassword.current.value) {
      password.current.setCustomValidity("Passwords don't match");
    } else {
      try {
        dispatch({ type: "REGISTER_START" });
        const res = await axios.post("/auth/register", {
          first_name: first_name.current.value,
          last_name: last_name.current.value,
          email: email.current.value,
          password: password.current.value,
        });
        dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
      } catch (e) {
        dispatch({ type: "REGISTER_FAILURE" });
      }
      try {
        // create cart for new user
        await axios.post("/cart");
        history.push(`/`);
      } catch (e) {
        console.log(e);
      }
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
                type="text"
                placeholder="First Name"
                required
                ref={first_name}
              />
              <Form.Control
                className="mt-3 mb-3"
                type="text"
                placeholder="Last Name"
                required
                ref={last_name}
              />

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
                required
                min={6}
                ref={password}
              />
              <Form.Control
                className="mt-3 mb-3"
                type="password"
                placeholder="Confirm Password"
                required
                min={6}
                ref={confirmPassword}
              />

              <div className="d-grid gap-2">
                <Button type="submit" variant="light" disabled={isFetching}>
                  {isFetching ? (
                    <Spinner animation="border" size="sm" variant="light" />
                  ) : (
                    "Register"
                  )}
                </Button>
              </div>
              {error && (
                <Alert className="mt-3 pt-1 pb-1 text-center" variant="error">
                  Error, Please Try Again
                </Alert>
              )}
            </Form>
            <p>Already have an Account? </p>
            <div className="d-grid gap-2">
              <Button
                as="a"
                href="/login"
                variant="primary"
                disabled={isFetching}
              >
                Login
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Register;
