<<<<<<< HEAD

import styles from '../styles/mainService.module.css';
import { BsFacebook } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { AiOutlineGoogle, AiOutlineTwitter } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { AUTHSIGNIN } from "@/redux/slices/auth.slice";
import { useForm } from "react-hook-form";
import { useAuthFetchQuery, useAuthLoginMutation } from "@/redux/api/auth.api";
// import google from '../../components/Images/Google-Icon-PNG_rwscww-removebg-preview.png';
// import  from '../../components/Images/Google-Icon-PNG_rwscww-removebg-preview.png';
// import google from '../../components/Images/Google-Icon-PNG_rwscww-removebg-preview.png';
=======
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import classNames from "classnames";
>>>>>>> master

<<<<<<< HEAD
<<<<<<< HEAD
function login () {
const dispatch = useDispatch()
// const { data = [] , isError , isSuccess , isUninitialized} =  useAuthFetchQuery()
const [ addlofgin , result ] = useAuthLoginMutation()
const { register, handleSubmit, watch, formState: { errors } } = useForm();
const onSubmit = data =>{
  console.log(data);
  // dispatch(AUTHSIGNIN(data)) 
  addlofgin({mane:"minhaz"})

}


=======
=======
>>>>>>> b1266b54056505c9356ef99835c662d1203b11cd
const Login = () => {
<<<<<<< HEAD
  const dispatch = useDispatch()
>>>>>>> b1266b54056505c9356ef99835c662d1203b11cd
  return (
    <> { console.log( result ) }
      <div className={styles.registerContainer}>
        <div className={styles.divission}>
<<<<<<< HEAD
<<<<<<< HEAD
           <div className={styles.LoginArea}>
           
               <button className={styles.userIcon}>   < CiUser className={styles.RealIcon} /></button>
               <h2 className="text-center font-semibold pt-3 text-xl">User login form</h2>
             <div className="text-left px-5">
             <form className="text-left" onSubmit={handleSubmit(onSubmit)}>
               <p className="text-left">Email :</p>
               <input {...register('username',{ required: true })} className={styles.loginInput} ></input>
               <p className="text-left">Password :</p>
               <input {...register('password',{ required: true })} className={styles.loginInput} type="password"></input>
               <button type='submit'  className={styles.SubmitBtn}>login</button>
             </form>
           <div className="text-center py-3">  <Link className="text-blue-700 align-center" href="/recovery" >Forget password?</Link></div>
             </div>
             <p>Dont  have an account? <Link href="/register" className="text-blue-700 ">Register</Link></p>
              
           </div>
        </div>
      </div>
=======
=======
>>>>>>> b1266b54056505c9356ef99835c662d1203b11cd
          <div className={styles.LoginArea}>

            <button className={styles.userIcon}>   < CiUser className={styles.RealIcon} /></button>
            <h2 className="text-center font-semibold pt-3 text-xl">User login form</h2>
=======
  const backgroundClass = classNames(
    "bg-[url('https://i.ibb.co/hRKMMLH/Rectangle.png')] max-h-screen bg-no-repeat bg-center bg-cover bg-fixed"
  );
  const formClass = classNames(
    "relative bg-[#000000b0] w-[80%] md:w-[40%] lg:w-[25%] text-white mx-auto mt-20 lg:mt-32 py-10 px-5 rounded shadow-2xl"
  );
  const loginButton = classNames(
    "bg-[#627FF4] w-full py-1 my-3 rounded-sm hover:bg-slate-300 hover:text-[#627FF4] hover:font-bold"
  );
  return (
    <>
      <div className={backgroundClass}>
        <div className="py-20">
          <div className={formClass}>
            <FaUserAlt className="absolute top-[-10%] left-[40%] text-7xl bg-[#627FF4] px-5 rounded-full" />
            <h1 className="text-center py-5 text-xl">Login </h1>
>>>>>>> master
            <div className="text-left px-5">
              <form className="text-left">
                <div className="py-2">
                  <p className="text-left text-slate-200 text-[15px] font-normal">
                    Email :
                  </p>
                  <input
                    className="w-full border-b-2 focus:outline-none font-light text-slate-300 text-[14px] bg-[#00000000] "
                    type="email"
                  />
                </div>
                <div className="py-2">
                  <p className="text-left text-slate-200 text-[15px] font-normal">
                    Password :
                  </p>
                  <input
                    className="w-full border-b-2 focus:outline-none font-light text-slate-300 text-[14px] bg-[#00000000] "
                    type="password"
                  />
                </div>
                <button type="submit" className={`${loginButton}`}>
                  Login
                </button>
              </form>
              <div className="text-center">
                <Link
                  className="text-[#627ff4] align-center font-normal text-lg"
                  href="/recovery"
                >
                  <h5 className="hover:text-white">Forget password?</h5>
                </Link>
              </div>
              <p className="text-slate-300 text-sm text-center">
                Dont have an account ?
                <Link
                  href="/register"
                  className="text-[#627ff4] pl-2 hover:text-white"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
<<<<<<< HEAD

        </div >
      </div >
<<<<<<< HEAD
>>>>>>> b1266b54056505c9356ef99835c662d1203b11cd
=======
>>>>>>> b1266b54056505c9356ef99835c662d1203b11cd
=======
        </div>
      </div>
>>>>>>> master
    </>
  );
};

export default Login;
