import { Container, Row } from "react-bootstrap";
import CategoryItem from "./CategoryItem";
import axios from "axios";
import { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/categories");
        setCategories(res.data.categories);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const category_imgs = {
    1: "https://images.unsplash.com/photo-1564020426549-fabfb8c467ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fHNraW5jYXJlJTIwcHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    2: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2tpbmNhcmUlMjBwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    3: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2tpbmNhcmUlMjBwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  };

  const categories_data =
    categories.length &&
    categories
      .filter((item) => item.name !== "featured")
      .map((item) => (
        <CategoryItem key={item.id} {...item} img={category_imgs[item.id]} />
      ));

  return (
    <Container className="mt-5 mb-5">
      <Row>{categories_data}</Row>
    </Container>
  );
};

export default Categories;
