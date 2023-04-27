import { useEffect, useState } from "react";
import Slider from "./Slider";
import DestinationProduct from "./DestinationProduct";

const Restaurants = () => {

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

export default Restaurants;
