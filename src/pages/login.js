
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
            <div className="text-left px-5">
              <form className="text-left">
                <p className="text-left">Email :</p>
                <input className={styles.loginInput} type="email"></input>
                <p className="text-left">Password :</p>
                <input className={styles.loginInput} type="password"></input>
                <button type='submit' onClick={(e) => { e.preventDefault(); dispatch(AUTHLOGIN()) }} className={styles.SubmitBtn}>login</button>
              </form>
              <div className="text-center py-3">  <Link className="text-blue-700 align-center" href="/recovery" >Forget password?</Link></div>
            </div>
            <p>Dont  have an account? <Link href="/register" className="text-blue-700 ">Register</Link></p>

          </div>

        </div >
      </div >
<<<<<<< HEAD
>>>>>>> b1266b54056505c9356ef99835c662d1203b11cd
=======
>>>>>>> b1266b54056505c9356ef99835c662d1203b11cd
    </>
  );
};

export default Login;
