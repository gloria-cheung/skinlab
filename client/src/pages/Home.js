import Topbar from "../components/Topbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
const Home = () => {
  return (
    <>
      <Announcement />
      <Topbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </>
  );
};

export default Home;
