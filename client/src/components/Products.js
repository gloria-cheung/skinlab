import { Row } from "react-bootstrap";
import ProductItem from "./ProductItem";

const Products = () => {
  const fakeData = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2tpbmNhcmUlMjBwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1616750819456-5cdee9b85d22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2tpbmNhcmUlMjBwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2tpbmNhcmUlMjBwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1631730486784-5456119f69ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2tpbmNhcmUlMjBwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1613803745799-ba6c10aace85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2tpbmNhcmUlMjBwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1631390179406-0bfe17e9f89d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNraW5jYXJlJTIwcHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1616750819801-4311f2c43890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNraW5jYXJlJTIwcHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1626783416763-67a92e5e7266?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNraW5jYXJlJTIwcHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
  ];

  const products = fakeData.map((item) => (
    <ProductItem key={item.id} {...item} />
  ));

  return (
    <>
      <Row className="ms-1 me-1">{products}</Row>
    </>
  );
};

export default Products;
