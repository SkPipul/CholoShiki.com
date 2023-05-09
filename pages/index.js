import Home from "./Component/Home";
import Footer from "./Shared/Navbar/Footer";
import Navbar from "./Shared/Navbar/Navbar";

const index = () => {
  return (
    <div className="">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default index;