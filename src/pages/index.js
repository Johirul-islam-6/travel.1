
import Adventures from "../../components/Adventure/Adventures";
import Contact from "../../components/Contact/Contact";
import FeedbackForm from "../../components/FeedbackForm/FeedbackForm";
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
      <FeedbackForm/>
    </>
  );
};
export default Home;
