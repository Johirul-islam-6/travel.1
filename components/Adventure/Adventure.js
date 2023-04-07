import Image from "next/image";
import React from "react";
import { BiUser } from "react-icons/bi";
const Adventure = ({ item }) => {
  return (
    <div>
      <div className="card card-compact bg-slate-300 shadow-xl mr-3 ml-3 lg:ml-0">
        <figure>
          {item.img ? (
            <Image
              height={300}
              src={item.img}
              alt="adventure image"
              width={300}
              className="h-[200px] w-full"
            />
          ) : (
            <BiUser/>
          )}
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-slate-900 text-center">
            {item.title}
          </h2>
          <p className="text-center text-slate-700 font-semibold text-sm">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Adventure;
