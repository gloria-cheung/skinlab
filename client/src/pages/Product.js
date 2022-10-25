import Topbar from "../components/Topbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import ProductDetails from "../components/ProductDetails";

const Product = () => {
  return (
    <>
      <Announcement />
      <Topbar />
      <ProductDetails />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Product;
