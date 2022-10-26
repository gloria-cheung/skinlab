import { Container } from "react-bootstrap";
import CartItem from "./CartItem";

const CartContainer = () => {
  const fakeData = [
    {
      _id: "123456789",
      title: "Oil-Free Face Lotion",
      price: 55.99,
      size: "regular size",
      img: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2tpbmNhcmUlMjBwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      _id: "001019283",
      title: "Renewal Night Cream",
      price: 70.99,
      size: "value size",
      img: "https://images.unsplash.com/photo-1616750819456-5cdee9b85d22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2tpbmNhcmUlMjBwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      _id: "123456709",
      title: "Brightening Eye Cream",
      price: 40.99,
      size: "regular size",
      img: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2tpbmNhcmUlMjBwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      _id: "111111111",
      title: "Anti-Wrinkle Serum ",
      price: 82.99,
      size: "travel size",
      img: "https://images.unsplash.com/photo-1631730486784-5456119f69ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2tpbmNhcmUlMjBwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
  ];
  return (
    <Container>
      {fakeData.map((item) => (
        <CartItem {...item} key={item._id} />
      ))}
    </Container>
  );
};

export default CartContainer;
