import Image from "next/image";
import React from "react";
import { BiUser } from "react-icons/bi";
const Adventure = ({ item }) => {
  return (
    <div>
      <div className="card card-compact relative  bg-slate-100 shadow-xl pb-5 mx-10 lg:ml-0">
        <figure>
          {item.img ? (
            <Image
              height={300}
              src={item.img}
              alt="adventure image"
              width={300}
              className="h-[200px] w-full scale-125 hover:scale-100 transition-transform duration-700 ease-in-out hover:brightness-50"
            />
          ) : (
            <BiUser />
          )}
        </figure>
        <div className="card-body text-justify">
          <h1 className="text-xl font-semibold  text-center">{item.title}</h1>
          <h5 className="text-center text-lg text-slate-500">
            {item.description}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Adventure;
