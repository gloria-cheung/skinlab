import Topbar from "../components/Topbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
const Home = () => {
  return (
    <>
      <Announcement />
      <Topbar />
      <Slider />
      <Categories />
      <Products />
    </>
  );
};

export default Home;
