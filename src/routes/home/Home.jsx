// import Navbar from "./components/navbar/Navbar"
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/product/Products";
import  Scrollby from "../../components/slider/Scrollby"
function Home() {
  return (
  
    <div className="Home">
      <Navbar/>
      <Banner/>
      <Products/>
      <Scrollby/>
      <Footer/>
     
      
      
    </div>
  );
}
export default Home;