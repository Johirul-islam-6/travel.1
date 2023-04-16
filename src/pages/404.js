import React from "react";
import img from '../../components/Images/errorpage/errorpage (1).png'
import Image from "next/image";
import Link from "next/link";
const ErrorPage = () => {
  return (
    <div className="bg-white">
      <div className=" w-1/2 m-auto">
        <div className="text-center">
        <Image src={img} alt="image" />
        </div>
      </div>
        <h2 className="text-6xl font-bold text-red-400 text-center">Oops</h2>
        <h1 className="text-2xl text-center font-bold mt-4 mb-3" style={{ backgroundClip: "text", WebkitBackgroundClip: "text", textFillColor: "transparent", WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(to right, #4F46E5, #E61F5B)" }}>404 PAGE NOT FOUND</h1>

        <p className="text-lg text-center w-full lg:w-2/5 m-auto font-[cursive] text-slate-800">sorry, the page you're looking for doesn't exist. if you think something is broken, report a problem.</p>
        <div className="text-center mt-4 pb-10">
        <Link className="text-center" href='/'><button className="btn font-semibold btn-outline btn-primary">Back To Homepage</button></Link>
        </div>
    </div>
  );
};

export default ErrorPage;
