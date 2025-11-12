import React, { useContext } from "react";
import HomeBanner from "../../components/Home/HomeBanner";
import ProductsSection from "../../components/Home/ProductsSection";
import BestSellers from "../../components/Home/BestSellers";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../Loading/Loading";
import Accordion from "../../components/Home/Accordion";
import Testimonials from "../../components/Home/Tastimonials";

const Home = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32   mt-16 mb-8">
      <title>Toy-Topia | Home</title>
      <HomeBanner />
      {/* <BannerSection /> */}

      <ProductsSection />
      <BestSellers />
      <Accordion />
      <Testimonials />
    </div>
  );
};

export default Home;
