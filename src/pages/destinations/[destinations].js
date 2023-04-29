import { useEffect, useState } from "react";
import Adventures from "../../../components/Adventure/Adventures";
import Slider from "../../../components/Destinations/Slider";
import { useRouter } from "next/router";
import DestinationProduct from "../../../components/Destinations/DestinationProduct";
import FeatureService from "../../../components/Home/Service/FeatureService/FeatureService";

const Destinations = () => {

  const [singelLocation, setLocation] = useState()
  const id = '643c2b61f7c5a823c7ca6272'

  useEffect(() => {
    fetch(`https://travel-xone-server.vercel.app/api/v1/location/${id}`)
      .then(res => res.json())
      .then(data => setLocation(data))

  }, [])



  return (
    <>
      <Slider value={singelLocation} />
      <DestinationProduct value={singelLocation} />
    </>
  );
};

export default Destinations;
