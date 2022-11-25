import Topbar from "../components/Topbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
const ProductList = () => {
  const path = window.location.pathname.slice(1);

  return (
    <>
      <Announcement />
      <Topbar />
      <Products path={path} />
      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductList;
