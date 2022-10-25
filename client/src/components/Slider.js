import { Carousel, Button } from "react-bootstrap";
import "./Slider.scss";

const Slider = () => {
  const fakeData = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNraW5jYXJlJTIwcHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      title: "black friday sale",
      desc: "get early access to sale items if you sign up for newsletter",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1508759073847-9ca702cec7d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAyfHxza2luY2FyZSUyMHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "hydration collection",
      desc: "try our new line of hydration products just in time for winter",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1578747763484-51b21a33e4fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fHNraW5jYXJlJTIwcHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      title: "clean at skinlab",
      desc: "feel good formulas with powerful ingredients for glowing skin",
    },
  ];

  const carouselItems = fakeData.map((item) => (
    <Carousel.Item key={item.id} interval={3000}>
      <img
        className="d-block w-100 carouselImg"
        src={item.img}
        alt="First slide"
      />
      <Carousel.Caption id="carouselCaption">
        <h2>{item.title}</h2>
        <h4>{item.desc}</h4>
        <Button variant="light" className="border p-3 mt-3 ps-5 pe-5">
          Shop Now
        </Button>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return <Carousel>{carouselItems}</Carousel>;
};

export default Slider;
