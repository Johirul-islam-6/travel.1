import Link from "next/link";
import {
  FaAirbnb,
  FaBloggerB,
  FaDelicious,
  FaDochub,
  FaHome,
  FaPhoneSquareAlt,
  FaUserAlt,
  FaUserLock,
} from "react-icons/fa";
import TopHeader from "./TopHeader";
import navbar from "../src/styles/home_style/hero.module.css";

const Header = () => {
  return (
    <>
      <TopHeader />
      <header className="w-[100%] justify-center bg-base-300 flex mx-auto absolute">
        <div class="navbar w-[100%] justify-center flex mx-auto bg-[#00000000]">
          {/* <!-- -------- toggle left small size slider ------ --> */}
          <div class="dropdown dropdown-start lg:hidden">
            <label tabindex="1" class="btn btn-ghost btn-circle avatar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>

            <ul
              tabindex="1"
              class="menu menu-compact dropdown-content mt-3 bg-[#020202e7] rounded-box w-[60vw] h-[90vh]"
            >
              <div class="h-[100vh] p-0 mx-6  space-y-2 md:w-60 md:hidden block py-4">
                <div class="flex justify-between w-[100%] mx-auto">
                  <Link
                    href="/"
                    className="text-white uppercase text-[20px] font-bold text-center cursor-pointer"
                  >
                    Travel.<span className="text-[#627FF4] ">XONE</span>
                  </Link>
                  <p className=" text-[20px]">x</p>
                </div>
                <div class="pt-3 before:flex before:w-full before:h-[1px] before:mb-0 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-[#fafafa] mr-3"></div>
                <div class="divide-gray-700 pt-6 relative z-50">
                  <ul>
                    <li class="hover:bg-[#0458c6]">
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        class={`${navbar.link_style_sm} flex items-center p-2 space-x-3 rounded-md`}
                      >
                        <FaHome />
                        <span>Home</span>
                      </a>
                    </li>
                    <li class="hover:bg-[#0458c6] mt-1">
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        class={`${navbar.link_style_sm} flex items-center p-2 space-x-3 rounded-md`}
                      >
                        <FaAirbnb />
                        <span>Adventure</span>
                      </a>
                    </li>
                    <li class="hover:bg-[#0458c6] mt-1">
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        class={`${navbar.link_style_sm} flex items-center p-2 space-x-3 rounded-md`}
                      >
                        <FaDelicious />
                        <span>Destination</span>
                      </a>
                    </li>
                    <li class="hover:bg-[#0458c6] mt-1">
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        class={`${navbar.link_style_sm} flex items-center p-2 space-x-3 rounded-md`}
                      >
                        <FaDochub />
                        <span>Deals</span>
                      </a>
                    </li>
                    <li class="hover:bg-[#0458c6] mt-1">
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        class={`${navbar.link_style_sm} flex items-center p-2 space-x-3 rounded-md`}
                      >
                        <FaBloggerB />
                        <span>Blogs</span>
                      </a>
                    </li>
                    <li class="hover:bg-[#0458c6] mt-1">
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        class={`${navbar.link_style_sm} flex items-center p-2 space-x-3 rounded-md`}
                      >
                        <FaPhoneSquareAlt />
                        <span>Contact Us </span>
                      </a>
                    </li>
                    <li class="hover:bg-[#0458c6] mt-1">
                      <Link
                        href="/admin"
                        rel="noopener noreferrer"
                        class={`${navbar.link_style_sm} flex items-center p-2 space-x-3 rounded-md`}
                      >
                        <FaUserLock />

                        <p className="ml-2 text-sm text-[#f7f7f7] font-bold text-[13px] bg-[#0b4bee] px-3 py-1">
                          Admin{" "}
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>

          {/* <!-- -----only small size navbar----- --> */}
          <div class="flex-1 flex justify-start w-[100%] reletive lg:hidden navbar-center pl-2">
            <Link
              href="/"
              className="text-slate-900 uppercase text-[25px] font-bold text-center cursor-pointer"
            >
              Travel.<span className="text-[#627FF4] font-bold">XONE</span>
            </Link>
          </div>

          <div class="flex-1 flex justify-end w-full  reletive lg:hidden navbar-end">
            <button className="h-[33px] text-[13px] px-4 text-[#dfdfdf] bg-[#0272f2] rounded-md hover:bg-[#2d89f1da]">
              <Link href="/register">Register</Link>
            </button>

            <div class="search_btn bg-slate-100 w-10 h-8 rounded-md ml-2">
              <FaUserAlt className="w-full h-full rounded text-blue-700 bg-base-100 p-2" />
            </div>
          </div>
          {/* -----------only small size navbar end----------- */}

          {/* ===================================== only larze size show ======================= */}
          <ul className="align-middle hidden lg:flex justify-center w-full">
            <div class="navbar px-20 ">
              <Link
                href="/"
                className="text-slate-900 uppercase text-[30px] font-bold cursor-pointer"
              >
                Travel.<span className="text-[#627FF4] font-bold">XONE</span>
              </Link>
            </div>

            <div class="navbar-cente flex justify-center">
              <ul className="menu menu-horizontal px-1">
                <li className="">
                  <Link href="/" className={`${navbar.link_style}`}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/destination" className={`${navbar.link_style}`}>
                    Destination
                  </Link>
                </li>
                <li>
                  <Link href="/adventure" className={`${navbar.link_style}`}>
                    Adventure
                  </Link>
                </li>
                <li>
                  <Link href="/deals" className={`${navbar.link_style}`}>
                    Deals
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className={`${navbar.link_style}`}>
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={`${navbar.link_style}`}>
                    Contact Us
                  </Link>
                </li>
                <li tabIndex={0}>
                  <Link href="/register" className={`${navbar.link_style}`}>
                    Login | Register
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar-end flex items-center">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-8 rounded-full">
                    <FaUserAlt className="w-8 h-8 text-blue-700 bg-base-300 p-2" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">Profile</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbar-end flex justify-center items-center"></div>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
