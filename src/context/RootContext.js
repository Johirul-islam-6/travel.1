import React, { createContext, useEffect, useState } from 'react';
import axios from '../../hooks/hook.axios';
const RootContext = createContext()
function Context(props) {
 const [status,setStatus] =useState({reload:false,loading:true})
 const [user,setUser] = useState(null)
 const LOGIN = (user)=>{
          const url = '/auth/login'
          return  axios.post(url,user)
 }
 const REGISTER = (newUser)=>{
   console.log('newUser =>', newUser)
        const url = '/auth/login'
        return  axios.post(url,newUser)

 }
const LOGOUT = ()=>{
      const url = '/auth/logout'
      return axios.get(url)
}
useEffect(()=>{
        const unSubscribe = async()=>{
                try{
                  const url = '/auth/profile'
                  const profile =  await axios.get(url)
                  setUser(profile.data.data)
                  setStatus({...status,loading:false})
                }
                catch{setStatus({...status,loading:false})}
                  

      }
      return ()=>  unSubscribe()
},[])

  const  RootContextValue = {status,setStatus,LOGIN,LOGOUT,REGISTER,user,setUser}

  return (
  <RootContext.Provider value={RootContextValue}> 
    {props.children}
  </RootContext.Provider>
  );
}
export {RootContext} 
export default Context;