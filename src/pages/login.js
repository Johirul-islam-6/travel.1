
import styles from '../styles/mainService.module.css';
import { BsFacebook } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { AiOutlineGoogle, AiOutlineTwitter } from "react-icons/ai";

import { AUTHLOGIN } from "@/redux/slices/auth.slice";
import Link from 'next/link';

// import google from '../../components/Images/Google-Icon-PNG_rwscww-removebg-preview.png';
// import  from '../../components/Images/Google-Icon-PNG_rwscww-removebg-preview.png';
// import google from '../../components/Images/Google-Icon-PNG_rwscww-removebg-preview.png';

const Login = () => {

  return (
    <>
      <div className={styles.registerContainer}>
        <div className={styles.divission}>
          <div className={styles.LoginArea}>

            
            <h2 className="text-center font-semibold pt-3 text-xl">User login form</h2>
            <div className="text-left px-5">
              <form className="text-left">
                <p className="text-left">Email :</p>
                <input className={styles.loginInput} type="email"></input>
                <p className="text-left">Password :</p>
                <input className={styles.loginInput} type="password"></input>
                <button type='submit'  className={styles.SubmitBtn}>login</button>
              </form>
              <div className="text-center py-3">  <Link className="text-blue-700 align-center" href="/recovery" >Forget password?</Link></div>
            </div>
            <p>Dont  have an account? <Link href="/register" className="text-blue-700 ">Register</Link></p>

          </div>

        </div >
      </div >
    </>
  );
};

export default Login;
