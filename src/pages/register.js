import Link from "next/link";
import styles from '../styles/mainService.module.css';
import { BsFacebook } from "react-icons/bs";
import { AiOutlineGoogle,AiOutlineTwitter } from "react-icons/ai";
// import google from '../../components/Images/Google-Icon-PNG_rwscww-removebg-preview.png';
// import  from '../../components/Images/Google-Icon-PNG_rwscww-removebg-preview.png';
// import google from '../../components/Images/Google-Icon-PNG_rwscww-removebg-preview.png';

const Registration = () => {
  return (
    <>
      <div className={styles.registerContainer}>
        <div className={styles.divission}>
           <div className={styles.registerArea}>
             <h2 className='text-center text-xl font-semibold'>Create Your Account</h2>
             <form className='px-5'>
               
             <div className='flex justify-between mb-5'>
               <label className={styles.label}>UserName </label>
               <div className={styles.input}>
                  :<input className={styles.field} type='text'></input>
               </div>
               </div>
               <div className='flex justify-between mb-5'>
               <label className={styles.label}>FullName </label>
               <div className={styles.input}>
                  :<input className={styles.field} type='text'></input>
               </div>
               </div>
               <div className='flex justify-between mb-5'>
               <label className={styles.label}>Phone No </label>
               <div className={styles.input}>
                  :<input className={styles.field} type='number'></input>
               </div>
               </div>
               <div className='flex justify-between mb-5'>
               <label className={styles.label}>Country </label>
               <div className={styles.input}>
                  :<input className={styles.field} type='text'></input>
               </div>
               </div>
               <div className='flex justify-between mb-5'>
               <label className={styles.label}>Email </label>
               <div className={styles.input}>
                  :<input className={styles.field} type='email'></input>
               </div>
               </div>
               <div className='flex justify-between mb-5'>
               <label className={styles.label}>Password </label>
               <div className={styles.input}>
                  :<input  className={styles.field}  type='password'></input>
               </div>
               </div>
               <button type='submit' className={styles.SubmitBtn}>Register</button>
             </form>
             <p>Already have an account <Link href="/login" className="text-blue-800">Login</Link></p>

              <div className="flex justify-between items-center px-5 mt-2">
                <div className={styles.divider}></div>
                  <p>More sign in methods</p>
                <div className={styles.divider}></div>
              </div>
              <div className="inline-block align-middle py-3">
              <div className="flex items-center ">
                <button className={styles.IconF}> <BsFacebook/></button>
                <button className={styles.IconG}> <AiOutlineGoogle/></button>
                <button className={styles.IconT}> <AiOutlineTwitter/></button>
              </div>
              </div>
              
           </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
