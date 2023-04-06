import Link from "next/link";
import { FaAirbnb, FaBloggerB, FaDelicious, FaDochub, FaHome, FaPhoneSquareAlt, FaUserAlt, FaUserLock } from "react-icons/fa";
import TopHeader from "./TopHeader";
import navbar from "../src/styles/home_style/hero.module.css"

const Header = () => {
  return (
    <>
      <TopHeader />
      <header className="w-[100%] justify-center flex mx-auto absolute">
        <div class="navbar w-[100%] justify-center flex mx-auto bg-[#00000021]">
          {/* <!-- -------- toggle left small size slider ------ --> */}
          <div class="dropdown dropdown-start md:hidden">
            <label tabindex="1" class="btn btn-ghost btn-circle avatar">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </label>

            <ul tabindex="1" class="menu menu-compact dropdown-content mt-3 bg-[#000000e7] rounded-box w-[60vw] h-[90vh]">
              <div class="h-[100vh] p-0 mx-6  space-y-2 md:w-60 md:hidden block py-4">
                <div class="flex justify-between w-[100%] mx-auto">
                  <h1 className="uppercase text-[20px] font-bold text-center cursor-pointer">Tour<span className="text-[#11b3f9]">EASy</span></h1>
                  <p className=" text-[20px]">x</p>
                </div>
                <div
                  class="pt-3 before:flex before:w-full before:h-[1px] before:mb-0 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-[#fafafa] mr-3">
                </div>
                <div class="divide-gray-700 pt-6 relative z-50">
                  <ul>
                    <li class="hover:bg-[#0458c6]">
                      <a rel="noopener noreferrer" href="#"
                        class={`${navbar.link_style_sm} flex items-center p-2 space-x-3 rounded-md`}>
                        <FaHome />
                        <span>Home</span>
                      </a>
                    </li>
                    <li class="hover:bg-[#0458c6] mt-1">
                      <a rel="noopener noreferrer" href="#"
                        class={`${navbar.link_style_sm} flex items-center p-2 space-x-3 rounded-md`}>
                        <FaAirbnb />
                        <span>Adventure</span>
                      </a>
                    </li>
                    <li class="hover:bg-[#0458c6] mt-1">
                      <a rel="noopener noreferrer" href="#"
                        class={`${navbar.link_style_sm} flex items-center p-2 space-x-3 rounded-md`}>
                        <FaDelicious />
                        <span>Destination</span>
                      </a>
                    </li>
                    <li class="hover:bg-[#0458c6] mt-1">
                      <a rel="noopener noreferrer" href="#"
                        class={`${navbar.link_style_sm} flex items-center p-2 space-x-3 rounded-md`}>
                        <FaDochub />
                        <span>Deals</span>
                      </a>
                    </li>
                    <li class="hover:bg-[#0458c6] mt-1">
                      <a rel="noopener noreferrer" href="#"
                        class={`${navbar.link_style_sm} flex items-center p-2 space-x-3 rounded-md`}>
                        <FaBloggerB />
                        <span>Blogs</span>
                      </a>
                    </li>
                    <li class="hover:bg-[#0458c6] mt-1">
                      <a rel="noopener noreferrer" href="#"
                        class={`${navbar.link_style_sm} flex items-center p-2 space-x-3 rounded-md`}>
                        <FaPhoneSquareAlt />
                        <span>Contact Us </span>
                      </a>
                    </li>
                    <li class="hover:bg-[#0458c6] mt-1">
                      <Link href="/admin" rel="noopener noreferrer" href="#"
                        class={`${navbar.link_style_sm} flex items-center p-2 space-x-3 rounded-md`}>
                        <FaUserLock />

                        <p className="ml-2 text-sm text-[#f7f7f7] font-bold text-[13px] bg-[#0b4bee] px-3 py-1">Admin </p>

                      </Link>
                    </li>

                  </ul>

                </div>
              </div>
            </ul>
          </div>

          {/* <!-- -----only small size navbar satar----- --> */}
          <div class="flex-1 flex justify-start w-[100%] reletive md:hidden navbar-center pl-2">
            <h1 className="uppercase text-[25px] font-bold text-center cursor-pointer">Tour<span className="text-[#11b3f9]">EASy</span></h1>
          </div>

          <div class="flex-1 flex justify-end w-full  reletive md:hidden navbar-end">

            <button className="h-[33px] text-[13px] px-4 text-[#dfdfdf] bg-[#0272f2] rounded-md font-bold hover:bg-[#2d89f1da]"> Login</button>


            <div class="search_btn bg-slate-100 w-10 h-8 rounded-md ml-2">
              <img class="w-full h-full rounded" src="https://i.ibb.co/74dCMRZ/profile-baground22.png"
                alt="Default avatar" />
            </div>


          </div>
          {/* -----------only small size navbar end----------- */}

          {/* ===================================== only larze size show ======================= */}
          <ul className="align-middle hidden md:flex justify-center w-full">
            <div class="navbar-start ">
              <h1 className="uppercase text-[30px] font-bold cursor-pointer">Tour<span className="text-[#11b3f9]">EASy</span></h1>
            </div>

            <div class="navbar-cente flex justify-center">
              <ul className="menu menu-horizontal px-1">
                <li className=""><Link href={''} className={`${navbar.link_style}`}>Home</Link></li>
                <li><Link href={''} className={`${navbar.link_style}`}>Destination</Link></li>
                <li><Link href={''} className={`${navbar.link_style}`}>Adventure</Link></li>
                <li><Link href={''} className={`${navbar.link_style}`}>Contact</Link></li>
                <li><Link href={''} className={`${navbar.link_style}`}>Blogs</Link></li>
                <li><Link href={''} className={`${navbar.link_style}`}>Contact Us  </Link></li>
                <li tabIndex={0}>
                  <Link href={''} className={`${navbar.link_style}`} >
                    countries
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                  </Link>
                  <ul className="p-2 bg-base-100">
                    <li><Link href={''} className={`${navbar.link_style}`}>Bangladesh</Link></li>
                    <li><Link href={''} className={`${navbar.link_style}`}>India</Link></li>
                  </ul>
                </li>

              </ul>
            </div>
            <div className="navbar-end flex justify-center items-center">
              <ul class="menu menu-horizontal px-1 flex justify-center items-center">

                <button className="h-[40px] px-8 text-[#dfdfdf] bg-[#0272f2] rounded-md font-bold hover:bg-[#2d89f1da]"> Login</button>

                <li class="">
                  <a class="">
                    <div class="avatar w-[45px] h-[45px rounded">
                      <div class="w-[100%] rounded">
                        <img src="https://media.licdn.com/dms/image/D5635AQEgyJhAVazUdw/profile-framedphoto-shrink_400_400/0/1678483166503?e=1680818400&v=beta&t=GJTU4zuWm7v8L66LbKvlUdhcbyu8XOGU_BAqVtzo798"
                          class="p-[3px]" alt="admin" />
                      </div>
                    </div>
                  </a>

                </li>


              </ul>
            </div>
          </ul>
        </div >
      </header >
    </>
  );
};

export default Header;
