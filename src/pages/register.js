import Link from "next/link";
<<<<<<< HEAD
import styles from '../styles/mainService.module.css';
import { BsFacebook } from "react-icons/bs";
import { AiOutlineGoogle,AiOutlineTwitter } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AUTHSIGNIUP } from "@/redux/slices/auth.slice";
// import google from '../../components/Images/Google-Icon-PNG_rwscww-removebg-preview.png';
// import  from '../../components/Images/Google-Icon-PNG_rwscww-removebg-preview.png';
// import google from '../../components/Images/Google-Icon-PNG_rwscww-removebg-preview.png';

const Registration = () => {
const dispatch = useDispatch()
const { register, handleSubmit, watch, formState: { errors } } = useForm();
const onSubmit = data =>{
  console.log(data);

  dispatch(AUTHSIGNIUP(data))

}
  return (
    <>
      <div className={styles.registerContainer}>
        <div className={styles.divission}>
           <div className={styles.registerArea}>
             <h2 className='text-center text-xl font-semibold'>Create Your Account</h2>
             <form className='px-5' onSubmit={handleSubmit(onSubmit)} >
               
             <div className='flex justify-between mb-5'>
               <label className={styles.label}>UserName </label>
               <div className={styles.input}>
                  :<input {...register('username',{ required: true })}  className={styles.field} type='text'></input>
               </div>
               </div>
               <div className='flex justify-between mb-5'>
               <label className={styles.label}>FullName </label>
               <div className={styles.input}>
                  :<input {...register('h',{ required: false })}  className={styles.field} type='text'></input>
               </div>
               </div>
               <div className='flex justify-between mb-5'>
               <label className={styles.label}>Phone No </label>
               <div className={styles.input}>
                  :<input {...register('phone',{ required: false })}  className={styles.field} type='number'></input>
               </div>
               </div>
               <div className='flex justify-between mb-5'>
               <label className={styles.label}>Country </label>
               <div className={styles.input}>
                  :<input {...register('country',{ required: false })}  className={styles.field} type='text'></input>
               </div>
               </div>
               <div className='flex justify-between mb-5'>
               <label className={styles.label}>Email </label>
               <div className={styles.input}>
                  :<input {...register('email',{ required: true })}  className={styles.field} ></input>
               </div>
               </div>
               <div className='flex justify-between mb-5'>
               <label className={styles.label}>Password </label>
               <div className={styles.input}>
                  :<input {...register('password',{ required: true })}  className={styles.field}  type='password'></input>
               </div>
               </div>
               <button type='submit' className={styles.SubmitBtn}>Register</button>
             </form>
             <p>Already have an account <Link href="/login" className="text-blue-800">Login</Link></p>
=======
import { BsFacebook, BsPencilSquare } from "react-icons/bs";
import { AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai";
import classNames from "classnames";

const Registration = () => {
  const backgroundClass = classNames(
    "bg-[url('https://i.ibb.co/cktYxxd/res1.png')] max-h-[120%] bg-no-repeat bg-center bg-cover bg-fixed"
  );
  const formClass = classNames(
    "relative bg-[#000000b0] w-[80%] md:w-[50%] lg:w-[35%] text-white mx-auto mt-20 lg:mt-32 py-10 px-8 rounded shadow-2xl"
  );
  const buttonAnimation = classNames(
    "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-[#627ff4]  duration-300"
  );
  const registerButton = classNames(
    "bg-[#627FF4] w-full py-1 my-3 rounded-lg hover:bg-slate-300 hover:text-[#627FF4] hover:font-bold"
  );
  return (
    <>
      <div className={backgroundClass}>
        <div className="py-20">
          <div className={formClass}>
            <BsPencilSquare className="absolute top-[-6%] left-[42%] text-7xl bg-[#627FF4] px-5 rounded-full" />
            <h1 className="text-center py-5 text-xl">Create an account </h1>
            <div className="text-left px-5">
              {/* -------Registration form-------- */}
              <form className="text-left">
                <div>
                  <input
                    type="text"
                    placeholder="User Name"
                    className="input input-ghost input-sm w-full max-w-sm my-2 placeholder:text-slate-300"
                  />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input input-ghost input-sm w-full max-w-sm my-2 placeholder:text-slate-300"
                  />
                  <input
                    type="text"
                    placeholder="Phone No"
                    className="input input-ghost input-sm w-full max-w-sm my-2 placeholder:text-slate-300"
                  />
                  <input
                    type="text"
                    placeholder="Country"
                    className="input input-ghost input-sm w-full max-w-sm my-2 placeholder:text-slate-300"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-ghost input-sm w-full max-w-sm my-2 placeholder:text-slate-300"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-ghost input-sm w-full max-w-sm my-2 placeholder:text-slate-300"
                  />
                </div>
                <button type="submit" className={`${registerButton}`}>
                  Register
                </button>
              </form>
>>>>>>> b1266b54056505c9356ef99835c662d1203b11cd

              {/* -------Already have an account ?------- */}
              <div className="text-center">
                <h5 className="text-slate-300 text-center font-normal text-md">
                  Already have an account ?
                  <Link
                    href="/login"
                    className="text-[#627ff4] hover:text-white pl-2"
                  >
                    Login
                  </Link>
                </h5>
              </div>

              {/* -------Already have an account ?------- */}
              <div className="text-center pt-3">
                <div>More Sign In Methods</div>
                <div className="divider bg-white h-[2px] my-2"></div>
                <div className="flex gap-5 text-3xl justify-center items-center">
                  <AiFillGoogleCircle
                    className={`${buttonAnimation} text-4xl`}
                  />
                  <BsFacebook className={`${buttonAnimation}`} />
                  <AiFillTwitterCircle
                    className={`${buttonAnimation} text-4xl`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
