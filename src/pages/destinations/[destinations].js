import { useEffect, useState } from "react";
import Adventures from "../../../components/Adventure/Adventures";
import Slider from "../../../components/Destinations/Slider";
import { useRouter } from "next/router";
import DestinationProduct from "../../../components/Destinations/DestinationProduct";

const Destinations = () => {
  const router = useRouter();
  const area = router.query.destinations;
  // console.log(area);
  // const [data, setData] = useState({});
  // const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(`https://assignment-11-server-ridoymia.vercel.app/location/${area}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //       setLoading(false);
  //     });
  // }, [area]);

  // if (isLoading) return <p>Loading...</p>;
  // if (!data) return <p>No profile data</p>;
  return (
    <>
      <Slider />
      <DestinationProduct />
    </>
  );
};

export default Destinations;
