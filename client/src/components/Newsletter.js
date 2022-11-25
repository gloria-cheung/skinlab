import { Container, Form, InputGroup, Button, Alert } from "react-bootstrap";
import { Send } from "@material-ui/icons";
import { useRef, useState, useContext } from "react";
import { AuthContext } from "../context/auth/AuthContext";
import "./Newsletter.scss";
import axios from "axios";

const Newsletter = () => {
  const email = useRef();
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const { currentUser } = useContext(AuthContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!currentUser) {
        setMessage("Please sign in or register first");
        setShow(true);
      } else {
        const res = await axios.post("/newsletter", {
          email: email.current.value,
        });

        setMessage(
          res.data.error
            ? "Error: email does not match user, please try again"
            : "Successfully Signed up for Newsletter"
        );
        setShow(true);
      }
    } catch (err) {
      setMessage(err.message);
      setShow(true);
    }
  };

  return (
    <Container id="newsletter">
      <h2>Newsletter</h2>
      <h5>Get timely updates for new releases!</h5>
      <Form onSubmit={submitHandler}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Your email"
            aria-label="user email"
            aria-describedby="basic-addon2"
            ref={email}
          />
          <Button variant="outline-dark" id="button-addon2" type="submit">
            <Send />
          </Button>
        </InputGroup>
      </Form>
      {show && (
        <Alert
          className="text-center"
          variant="dark"
          onClose={() => setShow(false)}
          dismissible
        >
          {message}
        </Alert>
      )}
    </Container>
  );
};

export default Newsletter;
