import React from "react";
import styles from "../../src/styles/contact.module.css";
import { BsFacebook, BsFillTelephoneFill, BsTwitter } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import Link from "next/link";
import { FaLinkedinIn, FaPhoneVolume } from "react-icons/fa";

const Contact = () => {
  const submitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value
    console.log(firstName, lastName, phone, email, message);
  };
  return (
    <div className="py-20 bg-[#f8f8f8]">
      <h2 className="text-6xl font-bold text-[#080250] mb-4 text-center">Contact Us</h2>
      <h3 className="text-lg font-semibold text-center text-[#0d0a2c]">
        Any Question or Remarks? Just write a message !
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-5 max-w-screen-xl m-auto bg-white shadow-2xl mt-20 rounded-xl">
        <div
          className={` ${styles.contact_card} mr-0 md:mr-5 mb-5 md:mb-0 md:col-span-2 py-10 px-10 xl:px-16 rounded-xl `}
        >
          <h2 className="text-white text-4xl font-semibold text-justify">
            Contact Information
          </h2>
          <p className="text-lg font-medium w-full md:w-4/5 text-slate-300 text-justify mt-5 font-[math]">
            Fill up the form and our Team will get back to your message or phone
            call
          </p>
          <div className="flex items-center mt-16 mb-10">
            <FaPhoneVolume className="text-[#FB5555] font-bold text-3xl mr-4" />
            <a
              href="tel:+8801757146195"
              className="text-slate-300 font-medium text-lg font-[monospace]"
            >
              +8801757146195
            </a>
          </div>
          <div className="flex items-center mb-10">
            <MdOutlineEmail className="text-[#FB5555] font-bold text-3xl mr-4" />
            <a
              href="mailto:info@jintupaul45@gmail.com"
              className="text-slate-300 font-medium text-lg font-[monospace]"
            >
              jintupaul45@gmail.com
            </a>
          </div>
          <div className="flex items-center mb-40">
            <ImLocation2 className="text-[#FB5555] font-bold text-3xl mr-4" />
            <span className="text-slate-300 font-medium text-start text-lg font-[monospace]">
              Habiganj, Sylhet, Bangladesh
            </span>
          </div>
          <div className="flex mb-6">
            <span
              className={`${styles.social_icon}  text-2xl md:text-3xl font-bold mr-3 xl:mr-6 `}
            >
              <BsFacebook />
            </span>
            <span
              className={`${styles.social_icon}  text-2xl md:text-3xl font-bold mr-3 xl:mr-6 `}
            >
              <BsTwitter />
            </span>
            <span
              className={`${styles.social_icon}  text-2xl md:text-3xl font-bold mr-3 xl:mr-6 `}
            >
              <GrInstagram />
            </span>
            <a
              className={`${styles.social_icon}  text-2xl md:text-3xl font-bold mr-3 xl:mr-6 `}
            >
              <FaLinkedinIn />
            </a>
          </div>
          <span className={styles.play_animation}></span>
          <span className={styles.white_bg}></span>
          <span className={styles.orange_bg}></span>
        </div>

        <form
          onSubmit={submitForm}
          className=" md:col-span-3 py-10 px-8 xl:px-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-semibold text-gray-500">
                  First Name
                </span>
              </label>
              <input
                type="text"
                name="firstName"
                className="border-b-2 bg-white text-slate-600 text-lg font-medium border-gray-300 focus:outline-none focus:border-blue-500 focus:border-spacing-2 px-2 py-2 text-start focus:border-b-4"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-semibold text-gray-500">
                  Last Name
                </span>
              </label>
              <input
                type="text"
                name="lastName"
                className="border-b-2 bg-white text-slate-600 text-lg font-medium border-gray-300 focus:outline-none focus:border-blue-500 focus:border-b-4 px-2 py-2 text-start"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-semibold text-gray-500">
                  Your E-mail
                </span>
              </label>
              <input
                type="email"
                name="email"
                className="border-b-2 bg-white text-slate-600 text-lg font-medium border-gray-300 focus:outline-none focus:border-blue-500 focus:border-spacing-2 px-2 py-2 text-start focus:border-b-4"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-semibold text-gray-500">
                  Your Phone
                </span>
              </label>
              <input
                type="text"
                name="phone"
                className="border-b-2 bg-white text-slate-600 text-lg font-medium border-gray-300 focus:outline-none focus:border-blue-500 focus:border-b-4 px-2 py-2 text-start"
              />
            </div>
          </div>
          <h2 className="text-black text-2xl font-semibold text-start mt-6">
              What do you want to know About ?{" "}
            </h2>
          <div className="flex items-center text-start mt-5 mb-5">
              <div className="form-control mr-4">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-blue-500"
                    checked
                  />
                  <span className="label-text font-normal text-slate-900 text-xl ml-3">
                    Travel Places
                  </span>
                </label>
              </div>
              <div className="form-control mr-4">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-blue-500"
                    checked
                  />
                  <span className="label-text text-slate-900 font-normal text-xl ml-3">
                    Hotel Booking
                  </span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-blue-500"
                    checked
                  />
                  <span className="label-text text-slate-900 font-normal text-xl ml-3">
                    Other
                  </span>
                </label>
              </div>
            </div>
          <div className="form-group">
            <textarea
              name="message"
              className="w-full message border-b-2 bg-white text-slate-600 font-normal border-gray-300 focus:outline-none focus:border-blue-500 focus:border-b-4 px-2 py-2 text-start"
              id=""
              cols="20"
              rows="5"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="text-end">
          <input className='mt-5 btn btn-primary' type="submit" value="Submit message" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
