import styles from "../../src/styles/home_style/hero.module.css";
import {
  FaCalendarAlt,
  FaChild,
  FaClipboardCheck,
  FaCrown,
  FaFighterJet,
  FaHandHoldingUsd,
  FaPeriscope,
  FaSplotch,
  FaUserAlt,
  FaWalking,
} from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section className="Section01">
        <div
          className={`${styles.heroBg} flex justify-center items-center md:h-[95vh] h-[120vh]`}
        >
          <div className="container">
            <h1 className="text-xl md:text-3xl lg:text-5xl  text-[#ede7e7] pt-10 md:pt-2 font-bold uppercase ">
              Your World of Joy
            </h1>
            <p className="text-sm md:text-lg lg:text-xl text-slate-400 pt-3 px-[2px] w-9/12 mx-auto">
              Find what makes you happy anytime, anywhere.
            </p>
            <div className="card_container h-[auto] shadow-2xl py-4  bg-[#fcfbfb76] text-base-500 mx-auto w-[75%] gap-y-2 mt-14 rounded-3xl grid grid-cols-1 md:grid-cols-5 justify-around items-center">
              {/* --------Home page middle part card inside design ---------------- */}
              <div className="dropdown dropdown-bottom cursor-pointer dropdown-end md:mx-5">
                <div
                  tabIndex={0}
                  className="inside flex justify-center items-center"
                >
                  <div className="icons p-2 bg-[#d5d0d0] rounded-md">
                    <FaPeriscope className="text-black" />
                  </div>
                  <div className="content">
                    <h1 tabIndex={0} className="text-start text-sm font-bold">
                      Location
                    </h1>
                    <p tabIndex={0} className=" text-[12px]">
                      Where you are going?
                    </p>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-[#000000b0] rounded-box w-52 text-white"
                >
                  <li>
                    <a>Dhaka, Bangladesh</a>
                  </li>
                  <li>
                    <a>kolkata, India</a>
                  </li>
                </ul>
              </div>
              {/* 02 card */}
              <div className="dropdown dropdown-bottom cursor-pointer dropdown-end md:mx-5 md:flex">
                <div class="hidden md:block before:flex before:w-[3px] before:h-[50px] before:mb-0 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-[#fafafacf] mr-3 "></div>
                <div
                  tabIndex={0}
                  className="inside flex justify-center items-center mr-8"
                >
                  <div className="icons p-2 bg-[#d5d0d0] rounded-md">
                    <FaCalendarAlt className="text-black" />
                  </div>
                  <div className="content pl-1">
                    <h1 tabIndex={0} className="text-start font-bold text-sm">
                      Check In{" "}
                    </h1>
                    <p tabIndex={0} className=" text-[12px] text-start">
                      Add Date
                    </p>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-[#000000b0] rounded-box w-52 text-white"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
              {/* 03 card */}
              <div className="dropdown dropdown-bottom cursor-pointer dropdown-end mx-5 md:flex">
                <div class="hidden md:block before:flex before:w-[3px] before:h-[50px] before:mb-0 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-[#fafafacf] mr-3"></div>
                <div
                  tabIndex={0}
                  className="inside flex justify-center items-center mr-8"
                >
                  <div className="icons p-2 bg-[#d5d0d0] rounded-md">
                    <FaCalendarAlt className="text-black" />
                  </div>
                  <div className="content">
                    <h1 tabIndex={0} className="text-start font-bold text-sm">
                      Check Out{" "}
                    </h1>
                    <p tabIndex={0} className="text-start text-[12px]">
                      Add Date
                    </p>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-[#000000b0] rounded-box w-52 text-white"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
              {/* 04 card */}
              <div className="dropdown dropdown-bottom cursor-pointer dropdown-end mx-5 md:flex">
                <div class="hidden md:block before:flex before:w-[3px] before:h-[50px] before:mb-0 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-[#fafafacf] mr-3"></div>
                <div
                  tabIndex={0}
                  className="inside flex justify-center items-center mr-16"
                >
                  <div className="icons p-2 bg-[#d5d0d0] rounded-md">
                    <FaUserAlt className="text-black" />
                  </div>
                  <div className="content ml-3">
                    <h1 tabIndex={0} className="text-start font-bold text-sm">
                      Guest{" "}
                    </h1>
                    <p tabIndex={0} className=" text-[14px] text-start">
                      45
                    </p>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-[#000000b0] rounded-box w-52 text-white"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
              {/* 05 Search */}
              <div className="dropdown dropdown-bottom cursor-pointer dropdown-end mx-5 md:flex">
                <div class=" hidden md:block before:flex before:w-[3px] before:h-[50px] before:mb-0 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-[#fafafacf] mr-3"></div>
                <div className="inside flex justify-center md:justify-start text-center items-center">
                  <div class="relative z-0">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="search"
                      class=" block w-full p-3 pl-10 text-sm rounded-lg bg-gray-5 dark:bg-[#00000029] dark:placeholder-gray-400  text-start"
                      placeholder="Search"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------- Card Section down home------------ */}
      <section className="flex justify-center items-center w-[100%] py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center w-[70%]">
          <div className="border mx-auto">
            <div className="">
              <FaWalking className="w-full text-[]" />
            </div>
            <div>
              <h2 className="">3500+</h2>
              <p className="">Happy Travelars</p>
            </div>
          </div>
          {/* <div className="shadow-2xl">
            <div className="flex justify-center items-center p-4  mx-auto bg-[#627FF4] rounded-full">
              <FaWalking className="text-white text-4xl" />
            </div>
            <div className=" text-black">
              <h2 className="text-center text-2xl font-semibold">3500+</h2>
              <p className="font-bold text-[#000000b0] text-sm">
                Happy Travelars
              </p>
            </div>
          </div> */}

          {/* <div
            className={`${styles.section02} card w-full pt-3 px-3 md:border-b-4 border-t-4 border-[#0475d8]`}
          >
            <div className="icon_box flex justify-center items-center py-3 px-3 w-[34%] mx-auto bg-[#0475d8] rounded-full">
              <FaChild className="text-[50px]" />
            </div>
            <div className="card-body text-black">
              <h2 className="text-center text-[23px] font-semibold">495+</h2>
              <p className="font-bold text-[#000000b0] text-[16px]">
                Tours Success
              </p>
            </div>
          </div> */}

          {/* <div
            className={`${styles.section02} card w-full pt-3 px-3 border-t-4 border-[#0475d8]`}
          >
            <div className="icon_box flex justify-center items-center py-3 px-3 w-[34%] mx-auto bg-[#0475d8] rounded-full">
              <FaClipboardCheck className="text-[50px]" />
            </div>
            <div className="card-body text-black">
              <h2 className="text-center text-[23px] font-semibold">99.5%+</h2>
              <p className="font-bold text-[#000000b0] text-[16px]">
                Positive Reviews
              </p>
            </div>
          </div>

          <div
            className={`${styles.section02} card w-full pt-3 px-3 border-t-4 md:border-b-4 border-[#0475d8]`}
          >
            <div className="icon_box flex justify-center items-center py-3 px-3 w-[34%] mx-auto bg-[#0475d8] rounded-full">
              <FaCrown className="text-[50px]" />
            </div>
            <div className="card-body text-black">
              <h2 className="text-center text-[23px] font-semibold">203+</h2>
              <p className="font-bold text-[#000000b0] text-[16px]">
                Award Wining
              </p>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
