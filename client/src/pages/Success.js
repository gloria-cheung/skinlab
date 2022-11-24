import Topbar from "../components/Topbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Order from "../components/Order";

const Success = () => {
  return (
    <>
      <Announcement />
      <Topbar />
      <Order />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Success;
