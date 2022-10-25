import Topbar from "../components/Topbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
const ProductList = () => {
  return (
    <>
      <Announcement />
      <Topbar />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductList;
