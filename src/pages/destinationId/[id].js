import { HiLocationMarker, HiUsers } from "react-icons/hi";
import {
  AiFillCaretDown,
  AiFillStar,
  AiOutlineClockCircle,
  AiOutlineLike,
} from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { FaShoePrints, FaUserAlt, FaUsers } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";




const detailsHostel01 = ({ detailsHotel }) => {
    const [singleData, setSingleData] = useState([]);
  console.log(detailsHotel.data[0], "This is single data");
  const singelsHotels = detailsHotel?.data[0];
  console.log("details hotels", detailsHotel.data);
    



  const bookingsubmit = (e) => {
    e.preventDefault();
    const fullname = e.target.fullname.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;

    const date = e.target.date.value;

    const GroupSize = e.target.GroupSize.value;
    const notes = e.target.notes.value;
    const bookingData = detailsHotel.data;
    const _id = bookingData?._id;
    const descriptions = bookingData?.descriptions;
    const district = bookingData?.district;
    const duration = bookingData?.duration;
    const title = bookingData?.title;
    const price = bookingData?.price;
    const placeID = bookingData?.placeID;
    const reviews = bookingData?.reviews;
    const tourType = bookingData?.tourType;
    // const pictureOne = bookingData?.pictures[0];
    // const pictureTwo = bookingData?.pictures[1];
    // const pictureThree = bookingData?.pictures[2];

    const bookingInfo = {
      fullname,
      email,
      phone,
      
      duration,
      date,
      
      GroupSize,
      notes,
      _id,
      descriptions,
      district,
      title,
      price,
      placeID,
      reviews,
      tourType,
      
    };
    console.log(bookingInfo);

    fetch("", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <section>
        {/* ---------- Header Title Part ---------------- */}
        <div className="bg-[url('https://i.ibb.co/nkNGLdF/banner.png')] bg-no-repeat bg-cover bg-left-bottom pt-28 md:pt-32 lg:pt-48 pb-4">
          <div className="pl-10 lg:pl-20">
            <h1 className="text-xl md:text-2xl lg:text-3xl  font-bold text-white">
              Hotel {singelsHotels?.placeName} Dhaka
            </h1>
            <div className="text-slate-300 flex items-center ">
              <HiLocationMarker />
              <h2 className="pl-1 w-10/12">{singelsHotels?.district}</h2>
            </div>
            <div className="text-slate-300 flex items-center ">
              <AiFillStar className="text-[#e2a04a]" />
              <h2 className="pl-1 w-10/12">
                5 ({singelsHotels?.reviews} reviews)
              </h2>
            </div>
          </div>
        </div>
        {/* -----------------Package Body Part-------------------- */}
        <div className=" px-0 md:px-10 lg:px-10">
          <div className="block md:flex lg:flex justify-between py-10 px-10 md:px-0 lg:px-0 gap-10">
            {/*------- Single Package Details Start------- */}
            {/* -----------------Carousel Start-------------- */}
            <div className="w-full md:w-[70%] lg:w-[3/4]">
              <div className="carousel w-full ">
                <div
                  id="slide1"
                  className="carousel-item relative w-full h-full md:h-[30%] lg:h-[50%]"
                >
                  <img
                    loading="lazy"
                    src={singelsHotels?.pictures[2]}
                    className="w-full h-[40vh] md:h-[65vh]"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div
                  id="slide2"
                  className="carousel-item relative w-full h-full md:h-[30%] lg:h-[50%]"
                >
                  <img
                    loading="lazy"
                    src={singelsHotels?.pictures[0]}
                    className="w-full h-[40vh] md:h-[65vh]"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div
                  id="slide3"
                  className="carousel-item relative w-full h-full md:h-[30%] lg:h-[50%]"
                >
                  <img
                    loading="lazy"
                    src={singelsHotels?.pictures[1]}
                    className="w-full h-[40vh] md:h-[65vh]"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide4" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
              {/* ------------properties--------------- */}
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center pt-4 ">
                {/* -----single card---- */}
                <div className=" flex mx-auto rounded items-center">
                  <div className="hover:shadow-lg">
                    <AiOutlineClockCircle className="border text-3xl lg:text-5xl p-1 lg:p-3 text-slate-600" />
                  </div>
                  <div className="pl-3">
                    <h1 className="text-sm lg:text-md">Duration</h1>
                    <h2 className="text-md lg:text-lg font-light text-slate-500">
                      <span className="text-[#627FF4]">
                        {singelsHotels?.duration}
                      </span>{" "}
                      days
                    </h2>
                  </div>
                </div>
                {/* -----single card---- */}
                <div className=" flex mx-auto rounded items-center">
                  <div className="hover:shadow-lg">
                    <FaShoePrints className="border text-3xl lg:text-5xl p-1 lg:p-3 text-slate-600" />
                  </div>
                  <div className="pl-3">
                    <h1 className="text-sm lg:text-md">Tour Type</h1>
                    <h2 className="text-md lg:text-lg font-light text-slate-500">
                      {singelsHotels?.tourType}
                    </h2>
                  </div>
                </div>
                {/* -----single card---- */}
                <div className=" flex mx-auto rounded items-center">
                  <div className="hover:shadow-lg">
                    <FaUsers className="border text-3xl lg:text-5xl p-1 lg:p-3 text-slate-600" />
                  </div>
                  <div className="pl-3">
                    <h1 className="text-sm lg:text-md">Group Size</h1>
                    <h2 className="text-md lg:text-lg font-light text-slate-500">
                      <span className="text-[#627FF4]">12</span> Peoples
                    </h2>
                  </div>
                </div>
                {/* -----single card---- */}
                <div className=" flex mx-auto rounded items-center">
                  <div className="hover:shadow-lg">
                    <TbWorld className="border text-3xl lg:text-5xl p-1 lg:p-3 text-slate-600" />
                  </div>
                  <div className="pl-3">
                    <h1 className="text-sm lg:text-md">Languages</h1>
                    <h2 className="text-md lg:text-lg font-light text-slate-500">
                      {singelsHotels?.language}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="divider"></div>
              {/* ----------------Tour Details----------------- */}
              <div>
                <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-800 pb-2">
                  {singelsHotels?.title}
                </h1>
                <h5 className="text-lg text-slate-500">
                  {singelsHotels?.descriptions}
                </h5>
              </div>
              {/* ----------------Tour Amenities----------------- */}
              <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-800 pb-2">
                    Highlights
                  </h1>
                  <h5 className="text-lg text-slate-500">
                    <li>Accepts Credit Cards</li>
                    <li>Outdoor Seating</li>
                    <li>Car Parking</li>
                    <li>Reservations</li>
                    <li>Free Coupons</li>
                    <li>Restaurant</li>
                  </h5>
                </div>
                <div>
                  <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-800 pb-2">
                    Included
                  </h1>
                  <h5 className="text-lg text-slate-500">
                    <li>Visit 7 Best Places</li>
                    <li>Cruise Dinner & Music Event</li>
                    <li>1 Meal Per Day</li>
                    <li>Pick and Drop Services</li>
                  </h5>
                </div>
                <div>
                  <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-800 pb-2">
                    Exclude
                  </h1>
                  <h5 className="text-lg text-slate-500">
                    <li>Additional Services</li>
                    <li>Insurance</li>
                    <li>Food & Drinks</li>
                    <li>Tickets</li>
                  </h5>
                </div>
              </div>
              <div className="divider"></div>
              {/* ----------------Tour Location Map----------------- */}
              <div>
                <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-800 pb-2">
                  Location
                </h1>
                <img
                  loading="lazy"
                  src="https://i.ibb.co/SxRXRHg/Rectangle-16.png"
                />
              </div>
              <div className="divider"></div>
              {/* ----------------Review----------------- */}
              <div>
                <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-800 pb-2">
                  Reviews
                </h1>
                {/* --------------- Single reviews -------------- */}
                <div className="border p-5 my-7">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between">
                      {/* <FaUserAlt className=" " /> */}
                      <img
                        loading="lazy"
                        className="rounded-full bg-[#3D3D3D] text-6xl p-2 text-white w-20 h-20"
                        src="https://media.licdn.com/dms/image/D5603AQFAv-ZfyGJC6A/profile-displayphoto-shrink_400_400/0/1680587786974?e=1687996800&v=beta&t=Q7DRuXsOW-EXKMx1-eOOP3dE-vOuWz8gBkh_jba7lhE"
                        alt=""
                      />
                      <div className="pl-5">
                        <p className="text-md md:text-md lg:text-xl text-black">
                          Rasel Khan
                        </p>
                        <h1 className="text-sm text-slate-500">
                          Founder of travel.xone.com
                        </h1>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center justify-between cursor-pointer">
                      <AiOutlineLike className="text-[#627FF4] " />
                      <p className="text-[#627FF4] ">10.5k</p>
                    </div>
                  </div>
                  <div className="text-[#e2a04a] flex text-lg pt-4">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <h1 className="text-md md:text-lg lg:text-xl pb-3">
                    Quality Services
                  </h1>
                  <h2 className="text-lg text-slate-500">
                    We have been on a couple of cycling trips before and this
                    one was probably the best. Tri our guide was outstanding and
                    all our fellow cyclists were a great bunch of people. We got
                    a real flavour of life in Vietnam. Lots of interesting
                    food.The meals were good and plentiful. Thought we would
                    lose weight but didn't! Good
                  </h2>
                  <div className="flex items-center gap-3 pt-2">
                    <h1 className="text-[#627FF4] text-sm">View More</h1>
                    <AiFillCaretDown />
                  </div>
                </div>
                {/* --------------- Single reviews -------------- */}
                <div className="border p-5 my-7">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between">
                      {/* <FaUserAlt className=" " /> */}
                      <img
                        loading="lazy"
                        className="rounded-full bg-[#3D3D3D] text-6xl p-2 text-white w-20 h-20"
                        src="https://media.licdn.com/dms/image/D5603AQHwrKq2JfCBhg/profile-displayphoto-shrink_400_400/0/1673467931951?e=1687996800&v=beta&t=oDo5LJ6gncC2mjRAks8TNbsIVcZEIIjg_pKL0Kd5lts"
                        alt=""
                      />
                      <div className="pl-5">
                        <p className="text-md md:text-md lg:text-xl text-black">
                          Jorna katun
                        </p>
                        <h1 className="text-sm text-slate-500">
                          Founder of travel.xone.com
                        </h1>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center justify-between cursor-pointer">
                      <AiOutlineLike className="text-[#627FF4] " />
                      <p className="text-[#627FF4]">1k</p>
                    </div>
                  </div>
                  <div className="text-[#e2a04a] flex text-lg pt-4">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <h1 className="text-md md:text-lg lg:text-xl pb-3">
                    Quality Services
                  </h1>
                  <h2 className="text-lg text-slate-500">
                    We have been on a couple of cycling trips before and this
                    one was probably the best. Tri our guide was outstanding and
                    all our fellow cyclists were a great bunch of people. We got
                    a real flavour of life in Vietnam. Lots of interesting
                    food.The meals were good and plentiful. Thought we would
                    lose weight but didn't! Good
                  </h2>
                  <div className="flex items-center gap-3 pt-2">
                    <h1 className="text-[#627FF4] text-sm">View More</h1>
                    <AiFillCaretDown />
                  </div>
                </div>
                {/* --------------- Single reviews -------------- */}
                <div className="border p-5 my-7">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between">
                      {/* <FaUserAlt className=" " /> */}
                      <img
                        loading="lazy"
                        className="rounded-full bg-[#3D3D3D] text-6xl p-2 text-white w-20 h-20"
                        src="https://media.licdn.com/dms/image/D5603AQGbtEaPt9PVKg/profile-displayphoto-shrink_400_400/0/1673089173008?e=1687996800&v=beta&t=4CkeUsiUmqjqkM5-KkPpGTG3EtUCiLqmJPlo7_3BVrI"
                        alt=""
                      />
                      <div className="pl-5">
                        <p className="text-md md:text-md lg:text-xl text-black">
                          Rakib hasan
                        </p>
                        <h1 className="text-sm text-slate-500">
                          Founder of travel.xone.com
                        </h1>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center justify-between cursor-pointer">
                      <AiOutlineLike className="text-[#627FF4] " />
                      <p className="text-[#627FF4] ">1.5k</p>
                    </div>
                  </div>
                  <div className="text-[#e2a04a] flex text-lg pt-4">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <h1 className="text-md md:text-lg lg:text-xl pb-3">
                    Quality Services
                  </h1>
                  <h2 className="text-lg text-slate-500">
                    We have been on a couple of cycling trips before and this
                    one was probably the best. Tri our guide was outstanding and
                    all our fellow cyclists were a great bunch of people. We got
                    a real flavour of life in Vietnam. Lots of interesting
                    food.The meals were good and plentiful. Thought we would
                    lose weight but didn't! Good
                  </h2>
                  <div className="flex items-center gap-3 pt-2">
                    <h1 className="text-[#627FF4] text-sm">View More</h1>
                    <AiFillCaretDown />
                  </div>
                </div>
              </div>
              <Link href="/comment">
                <div className="bg-[#3264FF] inline-block p-2 lg:p-3 text-white text-md lg:text-xl ">
                  <h1>Write a Review</h1>
                </div>
              </Link>
            </div>
            {/* -----------------Carousel End-------------- */}
            {/*------- Single Package Details End------- */}
            {/*------- Side Bar Start------- */}
            <div className="w-full md:w-[30%] lg:w-1/4 mt-10 md:mt-0 lg:mt-0 ">
              <div className="pt-20 pb-5 px-5 shadow-lg relative mb-10">
                <div className="flex justify-between bg-[#3264FF] py-3 px-4 absolute top-0 left-0  w-full">
                  <h1 className="text-slate-100 font-semibold text-2xl">
                    $<span> 149.00</span>
                  </h1>
                  <h1 className="text-slate-100">Dhaka</h1>
                </div>
                <h1 className="font-semibold text-2xl">BOOK TOUR</h1>
                <h2 className="text-xl text-slate-600">
                  Find your dream tour today
                </h2>
                <form onSubmit={bookingsubmit}>
                  <div className=" my-3">
                    <input
                      type="text"
                      name="fullname"
                      placeholder="Full Name"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className=" my-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className=" my-3">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className=" my-3">
                    <input
                      type="text"
                      name="countryRegion"
                      placeholder="Country Region"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className=" my-3">
                    <input
                      type="text"
                      name="Destinationplace"
                      placeholder="Destination Place"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className=" my-3">
                    <h1 className="text-sm text-slate-600 pl-4">Check In :</h1>
                    <input
                      type="date"
                      name="date"
                      placeholder="Check In"
                      className="input input-bordered w-full max-w-xs text-slate-500"
                    />
                  </div>
                  <div className=" my-3">
                    <select
                      name="duration"
                      className="select select-bordered w-full max-w-xs text-slate-500"
                    >
                      <option disabled selected>
                        SELECT DAYS
                      </option>

                      <option>3 days</option>
                      <option>5 days</option>
                      <option>7 days</option>
                      <option>9 days</option>
                    </select>
                  </div>
                  <div className=" my-3">
                    <input
                      type="number"
                      name="GroupSize"
                      placeholder="Group Size (people)"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className=" my-3">
                    <textarea
                      name="notes"
                      className="textarea textarea-bordered w-full"
                      placeholder="Notes"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                  >
                    Book Now
                  </button>
                </form>
              </div>
              <div className="w-11/12 p-5 border">
                <h1 className="text-2xl ">Tour Information</h1>
                <div className="flex items-center pt-3">
                  <HiUsers className="text-4xl p-2 text-[#1751E4] " />
                  <div className="pl-5">
                    <p className="text-md md:text-lg lg:text-lg text-slate-600">
                      Max Guests
                    </p>
                    <h1 className="text-lg ">12</h1>
                  </div>
                </div>
                <div className="flex items-center pt-3">
                  <FaUserAlt className="text-4xl p-2 text-[#1751E4] " />
                  <div className="pl-5">
                    <p className="text-md md:text-lg lg:text-lg text-slate-600">
                      Min Age
                    </p>
                    <h1 className="text-lg ">12+</h1>
                  </div>
                </div>
                <div className="flex items-center pt-3">
                  <TbWorld className="text-4xl p-2 text-[#1751E4] " />
                  <div className="pl-5">
                    <p className="text-md md:text-lg lg:text-lg text-slate-600">
                      Languages Support
                    </p>
                    <h1 className="text-lg ">English</h1>
                  </div>
                </div>
              </div>
              <div className="w-11/12 pt-5">
                <div className="bg-base-100 pt-3">
                  <figure>
                    <img
                      loading="lazy"
                      src="https://i.ibb.co/x3h8Fhf/New-Project-5.png"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="">
                    <h2 className="text-center py-1">KUAKATA SEA BEATCH</h2>
                  </div>
                </div>
              </div>
            </div>
            {/*------- Side Bar End------- */}
          </div>
        </div>
      </section>
    </>
  );
};

export default detailsHostel01;

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    `https://travel-xone-server.vercel.app/api/v1/hotels?_id=${id}`
  );
  const data = await res.json();

  return {
    props: {
      detailsHotel: data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://travel-xone-server.vercel.app/api/v1/hotels/"
  );
  const data = await res.json();
  const paths = data?.data?.map((currentLocation) => {
    return {
      params: {
        id: currentLocation?._id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
