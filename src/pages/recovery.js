import Link from "next/link";
import styles from '../styles/mainService.module.css';
import { BsFacebook } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { AiOutlineGoogle,AiOutlineTwitter } from "react-icons/ai";
// import google from '../../components/Images/Google-Icon-PNG_rwscww-removebg-preview.png';
// import  from '../../components/Images/Google-Icon-PNG_rwscww-removebg-preview.png';
// import google from '../../components/Images/Google-Icon-PNG_rwscww-removebg-preview.png';

const recovery = () => {
  return (
    <>
      <div className={styles.registerContainer}>
        <div className={styles.Rdivission}>
           <div className={styles.RecoveryArea}>
           
              
             <div className="text-left px-5 py-6">
             <form className="text-left">
               <p className="text-left">Email :</p>
               <input className={styles.loginInput} type="email"></input>
             
               <button type='submit' className={styles.SubmitBtn}>submit</button>
             </form>
         
             </div>
            
           </div>
        </div>
      </div>
    </>
  );
};

export default recovery;
