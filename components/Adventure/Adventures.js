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
    <div className={`${styles.adventure} py-20 `}>
      <div className=" m-auto max-w-screen-xl">
        {/*----- section header -----*/}
        <div className="text-center pb-6 md:pb-10 lg:pb-10">
          <h5 className="text-[#627FF4] font-bold">ADVENTURE OFFER</h5>
          <div className="divider w-[30px] mx-auto my-1 bg-[#1751E4] h-1"></div>
          <h1 className="font-bold text-white text-2xl md:text-4xl lg:text-4xl">
            feel real adventure
          </h1>
        </div>
        {/*----- section header -----*/}
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
