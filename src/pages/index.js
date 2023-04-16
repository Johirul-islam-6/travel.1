
import Adventures from "../../components/Adventure/Adventures";
import Contact from "../../components/Contact/Contact";
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
      <Contact/>
    </>
  );
};
export default Home;
