
import Adventures from "../../components/Adventure/Adventures";
import Hero from "../../components/Home/Hero";
import Meta from "../../components/Meta";
import Testimonial from "../../components/Testimonial/Testimonial";
import Services from "../../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Meta
        title="Travel Xone"
        keywords="travel"
        description="travel services"
      />
      <Hero />
      <Adventures />
      <Testimonial />
    </>
  );
};
export default Home;
