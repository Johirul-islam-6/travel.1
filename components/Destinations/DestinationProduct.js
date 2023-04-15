import classNames from "classnames";
import { GiLoveHowl } from "react-icons/gi";
import { RiHotelBedLine, RiHotelLine } from "react-icons/ri";
import { BiLocationPlus } from "react-icons/bi";
import {
  AiFillStar,
  AiOutlineClockCircle,
  AiOutlineUser,
  IconName,
} from "react-icons/ai";
import Link from "next/link";
const DestinationProduct = () => {
  const buttonClass = classNames(
    "bg-slate-100 text-zinc-500 py-1 px-2 rounded hover:bg-[#627FF4] hover:text-white shadow text-sm"
  );
  const bookNowButton = classNames(
    "text-slate-100 bg-[#1751E4] p-3 font-semibold hover:bg-slate-100 hover:shadow hover:text-[#1751E4]"
  );

  return (
    <>
      <section className="p-10">
        <div>
          <div>
            <h2 className="capitalize text-3xl">
              Top Restaurants near your tour Location :
            </h2>
            <div className="divider my-1"></div>
          </div>
          <div className="bg-[#F7FAFC] bg-[url('https://i.ibb.co/VS7dF4B/bg-1.png')] bg-auto bg-no-repeat bg-right-top">
            <div className="px-20 py-10">
              <h1 className="text-left text-2xl font-semibold text-[#1751E4] ">
                Capital and Central Region
              </h1>
              {/*------- features property ------- */}
              <div className="hidden md:block xl:block">
                <div className="flex gap-5">
                  <div className="flex items-center ">
                    <GiLoveHowl className="text-sm text-[#627FF4]" />
                    <p className="pl-2 text-sm">We Price Match</p>
                  </div>
                  <div className="flex items-center">
                    <RiHotelBedLine className="text-sm text-[#627FF4]" />
                    <p className="pl-2 text-sm">Hotel Booking Guarantee</p>
                  </div>
                  <div className="flex items-center">
                    <RiHotelLine className="text-sm text-[#627FF4]" />
                    <p className="pl-2 text-sm">Hotel Stay Guarantee</p>
                  </div>
                </div>
              </div>
              {/*------- features property ------- */}
              {/*------- Location Button Start ------- */}
              <div className="flex gap-5 mt-2">
                <div className={`${buttonClass}`}>All</div>
                <div className={`${buttonClass}`}>Dhaka city</div>
                <div className={`${buttonClass}`}>Lalbagh Fort</div>

                <div className={`${buttonClass}`}>Ahsan Manzil</div>

                <div className={`${buttonClass}`}>Panamnagar</div>
                <div className={`${buttonClass}`}>Sonargaon</div>
                <div className={`${buttonClass}`}>Shalban Vihara</div>
              </div>
              {/*------- Location Button End------- */}
              {/*------- package body Start------- */}
              <div className="flex justify-between py-10">
                {/*------- Packages Start------- */}
                <div className="grid gap-8 grid-clos-1 md:grid-cols-2 lg:grid-cols-3 w-full md:w-1/3 lg:w-9/12">
                  {/*------- Single package Start------- */}
                  <div className="card bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src="https://i.ibb.co/dQsMpD2/New-Project-2023-04-10-T004719-405.png"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-actions items-center justify-between bg-slate-950 pl-7">
                      <h1 className="text-slate-100">
                        TK <span className="font-bold text-2xl">8000</span> /-
                      </h1>
                      <Link href="">
                        <button className={`${bookNowButton}`}>Book Now</button>
                      </Link>
                    </div>
                    <div className="card-body">
                      <p className="card-title">Hotel Sarina Dhaka</p>
                      <h2 className=" text-lg text-slate-600">
                        Hotel Sarina Dhaka offers everything that a Business
                        Traveler needs with an exclusive..
                      </h2>
                      <div>
                        <div className="flex justify-between">
                          <div className="flex gap-2 items-center text-sm">
                            <BiLocationPlus className="hover:text-[#627FF4]" />
                            <p className="text-slate-500">Dhaka</p>
                          </div>
                          <div className="flex gap-2 items-center text-sm">
                            <AiOutlineClockCircle className="hover:text-[#627FF4]" />
                            <p className="text-slate-500">
                              <span className="text-slate-950 font-bold">
                                3{" "}
                              </span>
                              Days
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="flex gap-1 items-center">
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                          </div>
                          <div className="flex gap-2 items-center text-sm">
                            <AiOutlineUser className="hover:text-[#627FF4]" />
                            <p className="text-slate-500">
                              <span className="text-slate-950 font-bold">
                                2{" "}
                              </span>
                              Peoples
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*------- Single package End------- */}
                  {/*------- Single package Start------- */}
                  <div className="card bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src="https://i.ibb.co/dQsMpD2/New-Project-2023-04-10-T004719-405.png"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-actions items-center justify-between bg-slate-950 pl-7">
                      <h1 className="text-slate-100">
                        TK <span className="font-bold text-2xl">8000</span> /-
                      </h1>
                      <Link href="">
                        <button className={`${bookNowButton}`}>Book Now</button>
                      </Link>
                    </div>
                    <div className="card-body">
                      <p className="card-title">Hotel Sarina Dhaka</p>
                      <h2 className=" text-lg text-slate-600">
                        Hotel Sarina Dhaka offers everything that a Business
                        Traveler needs with an exclusive..
                      </h2>
                      <div>
                        <div className="flex justify-between">
                          <div className="flex gap-2 items-center text-sm">
                            <BiLocationPlus className="hover:text-[#627FF4]" />
                            <p className="text-slate-500">Dhaka</p>
                          </div>
                          <div className="flex gap-2 items-center text-sm">
                            <AiOutlineClockCircle className="hover:text-[#627FF4]" />
                            <p className="text-slate-500">
                              <span className="text-slate-950 font-bold">
                                3{" "}
                              </span>
                              Days
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="flex gap-1 items-center">
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                          </div>
                          <div className="flex gap-2 items-center text-sm">
                            <AiOutlineUser className="hover:text-[#627FF4]" />
                            <p className="text-slate-500">
                              <span className="text-slate-950 font-bold">
                                2{" "}
                              </span>
                              Peoples
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*------- Single package End------- */}
                  {/*------- Single package Start------- */}
                  <div className="card bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src="https://i.ibb.co/dQsMpD2/New-Project-2023-04-10-T004719-405.png"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-actions items-center justify-between bg-slate-950 pl-7">
                      <h1 className="text-slate-100">
                        TK <span className="font-bold text-2xl">8000</span> /-
                      </h1>
                      <Link href="">
                        <button className={`${bookNowButton}`}>Book Now</button>
                      </Link>
                    </div>
                    <div className="card-body">
                      <p className="card-title">Hotel Sarina Dhaka</p>
                      <h2 className=" text-lg text-slate-600">
                        Hotel Sarina Dhaka offers everything that a Business
                        Traveler needs with an exclusive..
                      </h2>
                      <div>
                        <div className="flex justify-between">
                          <div className="flex gap-2 items-center text-sm">
                            <BiLocationPlus className="hover:text-[#627FF4]" />
                            <p className="text-slate-500">Dhaka</p>
                          </div>
                          <div className="flex gap-2 items-center text-sm">
                            <AiOutlineClockCircle className="hover:text-[#627FF4]" />
                            <p className="text-slate-500">
                              <span className="text-slate-950 font-bold">
                                3{" "}
                              </span>
                              Days
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="flex gap-1 items-center">
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                          </div>
                          <div className="flex gap-2 items-center text-sm">
                            <AiOutlineUser className="hover:text-[#627FF4]" />
                            <p className="text-slate-500">
                              <span className="text-slate-950 font-bold">
                                2{" "}
                              </span>
                              Peoples
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*------- Single package End------- */}
                  {/*------- Single package Start------- */}
                  <div className="card bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src="https://i.ibb.co/dQsMpD2/New-Project-2023-04-10-T004719-405.png"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-actions items-center justify-between bg-slate-950 pl-7">
                      <h1 className="text-slate-100">
                        TK <span className="font-bold text-2xl">8000</span> /-
                      </h1>
                      <Link href="">
                        <button className={`${bookNowButton}`}>Book Now</button>
                      </Link>
                    </div>
                    <div className="card-body">
                      <p className="card-title">Hotel Sarina Dhaka</p>
                      <h2 className=" text-lg text-slate-600">
                        Hotel Sarina Dhaka offers everything that a Business
                        Traveler needs with an exclusive..
                      </h2>
                      <div>
                        <div className="flex justify-between">
                          <div className="flex gap-2 items-center text-sm">
                            <BiLocationPlus className="hover:text-[#627FF4]" />
                            <p className="text-slate-500">Dhaka</p>
                          </div>
                          <div className="flex gap-2 items-center text-sm">
                            <AiOutlineClockCircle className="hover:text-[#627FF4]" />
                            <p className="text-slate-500">
                              <span className="text-slate-950 font-bold">
                                3{" "}
                              </span>
                              Days
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="flex gap-1 items-center">
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                          </div>
                          <div className="flex gap-2 items-center text-sm">
                            <AiOutlineUser className="hover:text-[#627FF4]" />
                            <p className="text-slate-500">
                              <span className="text-slate-950 font-bold">
                                2{" "}
                              </span>
                              Peoples
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*------- Single package End------- */}
                  {/*------- Single package Start------- */}
                  <div className="card bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src="https://i.ibb.co/dQsMpD2/New-Project-2023-04-10-T004719-405.png"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-actions items-center justify-between bg-slate-950 pl-7">
                      <h1 className="text-slate-100">
                        TK <span className="font-bold text-2xl">8000</span> /-
                      </h1>
                      <Link href="">
                        <button className={`${bookNowButton}`}>Book Now</button>
                      </Link>
                    </div>
                    <div className="card-body">
                      <p className="card-title">Hotel Sarina Dhaka</p>
                      <h2 className=" text-lg text-slate-600">
                        Hotel Sarina Dhaka offers everything that a Business
                        Traveler needs with an exclusive..
                      </h2>
                      <div>
                        <div className="flex justify-between">
                          <div className="flex gap-2 items-center text-sm">
                            <BiLocationPlus className="hover:text-[#627FF4]" />
                            <p className="text-slate-500">Dhaka</p>
                          </div>
                          <div className="flex gap-2 items-center text-sm">
                            <AiOutlineClockCircle className="hover:text-[#627FF4]" />
                            <p className="text-slate-500">
                              <span className="text-slate-950 font-bold">
                                3{" "}
                              </span>
                              Days
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="flex gap-1 items-center">
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                          </div>
                          <div className="flex gap-2 items-center text-sm">
                            <AiOutlineUser className="hover:text-[#627FF4]" />
                            <p className="text-slate-500">
                              <span className="text-slate-950 font-bold">
                                2{" "}
                              </span>
                              Peoples
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*------- Single package End------- */}
                  {/*------- Single package Start------- */}
                  <div className="card bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src="https://i.ibb.co/dQsMpD2/New-Project-2023-04-10-T004719-405.png"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-actions items-center justify-between bg-slate-950 pl-7">
                      <h1 className="text-slate-100">
                        TK <span className="font-bold text-2xl">8000</span> /-
                      </h1>
                      <Link href="">
                        <button className={`${bookNowButton}`}>Book Now</button>
                      </Link>
                    </div>
                    <div className="card-body">
                      <p className="card-title">Hotel Sarina Dhaka</p>
                      <h2 className=" text-lg text-slate-600">
                        Hotel Sarina Dhaka offers everything that a Business
                        Traveler needs with an exclusive..
                      </h2>
                      <div>
                        <div className="flex justify-between">
                          <div className="flex gap-2 items-center text-sm">
                            <BiLocationPlus className="hover:text-[#627FF4]" />
                            <p className="text-slate-500">Dhaka</p>
                          </div>
                          <div className="flex gap-2 items-center text-sm">
                            <AiOutlineClockCircle className="hover:text-[#627FF4]" />
                            <p className="text-slate-500">
                              <span className="text-slate-950 font-bold">
                                3{" "}
                              </span>
                              Days
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="flex gap-1 items-center">
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                          </div>
                          <div className="flex gap-2 items-center text-sm">
                            <AiOutlineUser className="hover:text-[#627FF4]" />
                            <p className="text-slate-500">
                              <span className="text-slate-950 font-bold">
                                2{" "}
                              </span>
                              Peoples
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*------- Single package End------- */}
                  {/*------- Single package Start------- */}
                  <div className="card bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src="https://i.ibb.co/dQsMpD2/New-Project-2023-04-10-T004719-405.png"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-actions items-center justify-between bg-slate-950 pl-7">
                      <h1 className="text-slate-100">
                        TK <span className="font-bold text-2xl">8000</span> /-
                      </h1>
                      <Link href="">
                        <button className={`${bookNowButton}`}>Book Now</button>
                      </Link>
                    </div>
                    <div className="card-body">
                      <p className="card-title">Hotel Sarina Dhaka</p>
                      <h2 className=" text-lg text-slate-600">
                        Hotel Sarina Dhaka offers everything that a Business
                        Traveler needs with an exclusive..
                      </h2>
                      <div>
                        <div className="flex justify-between">
                          <div className="flex gap-2 items-center text-sm">
                            <BiLocationPlus className="hover:text-[#627FF4]" />
                            <p className="text-slate-500">Dhaka</p>
                          </div>
                          <div className="flex gap-2 items-center text-sm">
                            <AiOutlineClockCircle className="hover:text-[#627FF4]" />
                            <p className="text-slate-500">
                              <span className="text-slate-950 font-bold">
                                3{" "}
                              </span>
                              Days
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="flex gap-1 items-center">
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                          </div>
                          <div className="flex gap-2 items-center text-sm">
                            <AiOutlineUser className="hover:text-[#627FF4]" />
                            <p className="text-slate-500">
                              <span className="text-slate-950 font-bold">
                                2{" "}
                              </span>
                              Peoples
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*------- Single package End------- */}
                  {/*------- Single package Start------- */}
                  <div className="card bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src="https://i.ibb.co/dQsMpD2/New-Project-2023-04-10-T004719-405.png"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-actions items-center justify-between bg-slate-950 pl-7">
                      <h1 className="text-slate-100">
                        TK <span className="font-bold text-2xl">8000</span> /-
                      </h1>
                      <Link href="">
                        <button className={`${bookNowButton}`}>Book Now</button>
                      </Link>
                    </div>
                    <div className="card-body">
                      <p className="card-title">Hotel Sarina Dhaka</p>
                      <h2 className=" text-lg text-slate-600">
                        Hotel Sarina Dhaka offers everything that a Business
                        Traveler needs with an exclusive..
                      </h2>
                      <div>
                        <div className="flex justify-between">
                          <div className="flex gap-2 items-center text-sm">
                            <BiLocationPlus className="hover:text-[#627FF4]" />
                            <p className="text-slate-500">Dhaka</p>
                          </div>
                          <div className="flex gap-2 items-center text-sm">
                            <AiOutlineClockCircle className="hover:text-[#627FF4]" />
                            <p className="text-slate-500">
                              <span className="text-slate-950 font-bold">
                                3{" "}
                              </span>
                              Days
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="flex gap-1 items-center">
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                            <AiFillStar className="text-[#e7b62f] text-xl" />
                          </div>
                          <div className="flex gap-2 items-center text-sm">
                            <AiOutlineUser className="hover:text-[#627FF4]" />
                            <p className="text-slate-500">
                              <span className="text-slate-950 font-bold">
                                2{" "}
                              </span>
                              Peoples
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*------- Single package End------- */}
                </div>
                {/*------- Packages End------- */}
                {/*------- Side Bar Start------- */}
                <div className=" ">
                  <div className="bg-slate-500 p-5">
                    <h1>Sort By Filter</h1>
                    <div>
                      <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>
                          Select Destination
                        </option>
                        <option>Dhaka City</option>
                        <option>Lalbagh Fort</option>
                        <option>Ahasan Manzil</option>
                        <option>Panamnagar</option>
                        <option>Sonargaon</option>
                        <option>Shalban Vihara</option>
                      </select>
                    </div>
                    <div>
                      <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>
                          SELECT DAYS
                        </option>
                        <option>All</option>
                        <option>3 days</option>
                        <option>5 days</option>
                        <option>7 days</option>
                        <option>9 days</option>
                      </select>
                    </div>
                    <div>
                      <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>
                          Select Ratings
                        </option>
                        <option>1 Star</option>
                        <option>2 Star</option>
                        <option>3 Star</option>
                        <option>4 Star</option>
                        <option>5 Star</option>
                      </select>
                    </div>
                    <div>
                      <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>
                          Select Facility
                        </option>
                        <option>Accepts Credit Cards</option>
                        <option>Free Coupons</option>
                        <option>Private Tour</option>
                        <option>Free Wifi</option>
                        <option>Parking</option>
                        <option>Reservation</option>
                      </select>
                    </div>
                    <div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value="25"
                        className="range"
                        step="25"
                      />
                      <div className="w-full flex justify-between text-xs px-2">
                        <span>|</span>
                        <span>|</span>
                        <span>|</span>
                        <span>|</span>
                        <span>|</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/*------- Side Bar End------- */}
              </div>
              {/*------- package body End------- */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DestinationProduct;
