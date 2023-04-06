import { BiLocationPlus } from "react-icons/bi";
import {
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";
import Link from "next/link";

const TopHeader = () => {
  return (
    <>
      <div className="hidden lg:block bg-[#026fc8] px-10 py-2 relative text-white w-[100%]">
        <div className="flex justify-between">
          <div className="flex gap-8">
            <div className="flex items-center text-white">
              <BiLocationPlus />
              <p className="ml-1 text-[#f7f7f7] font-bold text-[13px]">250 Main Street, Mirpur, Dhaka </p>
            </div>
            <div className="flex items-center  text-white">
              <AiOutlineMail className="mt-1" />
              <p className="ml-1 text-[#f7f7f7] font-bold text-[13px]">contact@example.com</p>
            </div>
          </div>
          <div className="flex gap-5 items-center text-base-300 absolute end-10 top-0 ">
            <div className="flex gap-5">

              <Link href="/about">
                <p className="ml-2 text-sm text-[#f7f7f7] font-bold text-[13px]">About us</p>
              </Link>
              <Link href="/admin">
                <p className="ml-2 text-sm text-[#f7f7f7] font-bold text-[13px] bg-[#0b4bee] px-3 py-1">Admin </p>
              </Link>
            </div>
            <div className="flex gap-x-6 gap-y-2 items-center primary-color p-[10px]">
              <BsFacebook className="text-white cursor-pointer hover:text-[#000000]" />
              <AiOutlineInstagram className="text-white cursor-pointer hover:text-[#000000]" />
              <FaPinterest className="text-white cursor-pointer hover:text-[#000000]" />
              <AiFillTwitterCircle className="text-white cursor-pointer hover:text-[#000000]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
