import { Container, Row } from "react-bootstrap";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  const fakeData = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1564020426549-fabfb8c467ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fHNraW5jYXJlJTIwcHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      title: "Dullness",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2tpbmNhcmUlMjBwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      title: "Acne",
    },
    {
      id: 3,

      img: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2tpbmNhcmUlMjBwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      title: "Dryness",
    },
  ];

  const categories = fakeData.map((item) => (
    <CategoryItem key={item.id} {...item} />
  ));

  return (
    <Container className="mt-5 mb-5">
      <Row>{categories}</Row>
    </Container>
  );
};

export default Categories;
