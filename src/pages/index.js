import Adventures from "../../components/Adventure/Adventures";
import Contact from "../../components/Contact/Contact";
import Hero from "../../components/Home/Hero";
import Location from "../../components/Home/Location";
import Opportunity from "../../components/Home/Opportunity";
import FeatureService from "../../components/Home/Service/FeatureService/FeatureService";
import Meta from "../../components/Meta";
import Testimonial from "../../components/Testimonial/Testimonial";


const Home = () => {
  return (
    <>
      <Meta
        title="Travel Xone"
        keywords="travel"
        description="travel services"
      />
      <Hero />
      <Location />
      <Opportunity />
      <Adventures />
      <Testimonial />
      <Contact/>
    </>
  );
};
export default Home;
