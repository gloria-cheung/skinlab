import { Container, Form, InputGroup, Button } from "react-bootstrap";
import { Send } from "@material-ui/icons";
import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <Container id="newsletter">
      <h2>Newsletter</h2>
      <h5>Get timely updates for new releases!</h5>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Your email"
          aria-label="user email"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-dark" id="button-addon2">
          <Send />
        </Button>
      </InputGroup>
    </Container>
  );
};

export default Newsletter;
