import styles from "../../src/styles/home_style/hero.module.css";
import { FaAward, FaPlaneDeparture, FaWalking } from "react-icons/fa";
import { BiCommentCheck } from "react-icons/bi";

const Hero = () => {
  return (
    <>
      <section className="Section01 text-center">
        <div
          className={`${styles.heroBg} flex justify-center items-center md:h-[95vh] h-[120vh]`}
        >
          <div className="container">
            <h1 className="text-xl md:text-3xl lg:text-5xl  text-[#ede7e7] pt-20 md:pt-10 font-bold uppercase ">
              Your World of Joy
            </h1>
            <h5 className="text-sm md:text-lg lg:text-xl text-slate-400 pt-3 px-[2px] w-10/12 md:w-7/12  lg:w-7/12 mx-auto">
              Bangladesh has been ranked seventh out of ‘top ten best value’
              travel destinations for 2019 launched by Lonely Planet, a global
              leader of travel guidebook publisher.
            </h5>

            {/* ------------- Search Available Location ------------ */}
            <div className="stats stats-vertical md:stats-horizontal lg:stats-horizontal shadow my-5 md:my-8 text-center items-center md:mx-4">
              <div className="stat">
                <p>Location</p>
                <select className="select-ghost focus:outline-none text-xs font-normal max-w-[80%] mx-auto">
                  <option disabled selected>
                    Select Place
                  </option>
                  <option>Homer</option>
                  <option>Marge</option>
                  <option>Bart</option>
                  <option>Lisa</option>
                  <option>Maggie</option>
                </select>
              </div>

              <div className="stat">
                <p>Check In</p>
                <input
                  type="date"
                  className="text-xs focus:outline-none max-w-[80%] mx-auto"
                />
              </div>

              <div className="stat">
                <p>Packages</p>
                <select className="select-ghost focus:outline-none text-xs font-normal max-w-[80%] mx-auto">
                  <option disabled selected>
                    Select Days
                  </option>
                  <option>3-5 days</option>
                  <option>5-7 days</option>
                  <option>7-9 days</option>
                </select>
              </div>

              <div className="">
                <p>Guest</p>
                <input
                  type="number"
                  placeholder="0"
                  className="text-center focus:outline-none  max-w-[40%] mx-auto"
                />
              </div>

              <div className="stat ">
                <button
                  type="submit"
                  className="text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------- Card Section down home------------ */}
      <section className="flex justify-center items-center w-[100%] py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center w-[70%]">
          {/* -----single card---- */}
          <div className="text-center border mx-auto px-3 py-5 rounded hover:shadow-2xl">
            <div className="pb-2">
              <FaWalking className="w-1/2 h-1/2 p-4 bg-[#E3E7F8] hover:bg-[#627FF4] text-[#627FF4] hover:text-white rounded-full mx-auto text-9xl" />
            </div>
            <div>
              <h2 className="text-3xl">3500+</h2>
              <div className="text-sm font-light text-slate-500">
                Happy Travelars
              </div>
            </div>
          </div>
          {/* -----single card---- */}
          <div className="text-center border mx-auto px-3 py-5 rounded hover:shadow-2xl">
            <div className="pb-2">
              <FaPlaneDeparture className="w-1/2 h-1/2 p-4 bg-[#E3E7F8] hover:bg-[#627FF4] text-[#627FF4] hover:text-white rounded-full mx-auto text-9xl" />
            </div>
            <div>
              <h2 className="text-3xl">1650+</h2>
              <div className="text-sm font-light text-slate-500">
                Tours success
              </div>
            </div>
          </div>
          {/* -----single card---- */}
          <div className="text-center border mx-auto px-3 py-5 rounded hover:shadow-2xl">
            <div className="pb-2">
              <BiCommentCheck className="w-1/2 h-1/2 p-4 bg-[#E3E7F8] hover:bg-[#627FF4] text-[#627FF4] hover:text-white rounded-full mx-auto text-9xl" />
            </div>
            <div>
              <h2 className="text-3xl">99.5% </h2>
              <div className="text-sm font-light text-slate-500">
                Positive Reviews
              </div>
            </div>
          </div>
          {/* -----single card---- */}
          <div className="text-center border mx-auto px-3 py-5 rounded hover:shadow-2xl">
            <div className="pb-2">
              <FaAward className="w-1/2 h-1/2 p-4 bg-[#E3E7F8] hover:bg-[#627FF4] text-[#627FF4] hover:text-white rounded-full mx-auto text-9xl" />
            </div>
            <div>
              <h2 className="text-3xl">62k+</h2>
              <div className="text-sm font-light text-slate-500">
                Awards Winning
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
