import Adventures from "../../components/Adventure/Adventures";
import Hero from "../../components/Home/Hero";
import Location from "../../components/Home/Location";
import Opportunity from "../../components/Home/Opportunity";
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
    </>
  );
};
export default Home;
