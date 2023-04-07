import React, { useState } from "react";
import styles from "../../src/styles/Adventure.module.css";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from "../../public/adventure.json";
import Adventure from "./Adventure";
const Adventures = () => {
  const [jsonData, setJsonData] = useState(data);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1160 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1160, min: 910 },
      items: 3,
    },
    tab: {
      breakpoint: { max: 910, min: 660 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={styles.adventure}>
      <div className=" m-auto max-w-screen-xl">
        <h2 className="text-xl font-bold text-center text-sky-400">
          What We are Offering
        </h2>
        <h1 className="text-2xl font-semibold mb-10 text-white text-center">
          Feel real adventure and very close to nature
        </h1>
        <Carousel responsive={responsive}>
          {jsonData.map((item) => (
            <Adventure key={item.id} item={item}></Adventure>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Adventures;
