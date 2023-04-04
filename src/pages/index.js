import Hero from "../../components/Home/Hero";
import FeatureService from "../../components/Home/Service/FeatureService/FeatureService";
import Meta from "../../components/Meta";

const Home = () => {
  return (
    <>

      <Meta
        title="Travel Xone"
        keywords="travel"
        description="travel services"
      />
      <Hero />
      <FeatureService></FeatureService>

    </>
  );
};
export default Home;
