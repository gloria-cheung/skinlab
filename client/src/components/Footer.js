import { ListGroup } from "react-bootstrap";
import {
  CallOutlined,
  MailOutlined,
  LocationOnOutlined,
} from "@material-ui/icons";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="descriptionContainer">
        <h3>SKIN LAB.</h3>
        <p>
          Skin Lab is an evolving collection of treatments offering familiar,
          effective clinical technologies positioned to raise pricing and
          communication integrity in skincare. The brand was created to
          celebrate integrity in its most humble and true form. Its offering is
          pioneering, not in the familiar technologies it uses, but in its
          honesty and integrity.
        </p>
      </div>
      <div className="linksContainer">
        <h3>Useful Links</h3>
        <div>
          <ListGroup as="ul">
            <ListGroup.Item
              as="li"
              className="border-0 ps-0 me-5 pe-5 linkListItem"
            >
              Home
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="border-0 ps-0 me-5 pe-5 linkListItem"
            >
              Dullness
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="border-0 ps-0 me-5 pe-5 linkListItem"
            >
              Acne
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="border-0 ps-0 me-5 pe-5 linkListItem"
            >
              Dryness
            </ListGroup.Item>
          </ListGroup>
          <ListGroup as="ul">
            <ListGroup.Item as="li" className="border-0 ps-0 linkListItem">
              My Account
            </ListGroup.Item>
            <ListGroup.Item as="li" className="border-0 ps-0 linkListItem">
              Wishlist
            </ListGroup.Item>
            <ListGroup.Item as="li" className="border-0 ps-0 linkListItem">
              Cart
            </ListGroup.Item>
            <ListGroup.Item as="li" className="border-0 ps-0 linkListItem">
              Order Tracking
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <div className="contactContainer">
        <h3>Contact</h3>
        <span>
          <LocationOnOutlined /> 1234 Yonge St, Toronto, ON M5N 1K4
        </span>
        <span>
          <CallOutlined /> +1 800 123 1234
        </span>
        <span>
          <MailOutlined /> contact@skinlab.com
        </span>
      </div>
    </footer>
  );
};

export default Footer;
