import React, { useState } from 'react';
import { io } from "socket.io-client";

function chat(props) {
<<<<<<< HEAD
<<<<<<< HEAD
// const socket = io("http://localhost:5000/");
const [message,setMessage] = useState()
{ console.log( process.env.HOST )   }
const handleClick = (e)=>{
  e.preventDefault();
  // console.log(socket )
  // socket.emit('chat',{message})
  // socket.on('chat',(load)=>{
  //   console.log( load)
  // })


}



=======
=======
>>>>>>> b1266b54056505c9356ef99835c662d1203b11cd
  // const socket = io("http://localhost:5000/");
  const [message, setMessage] = useState()
  { console.log(process.env.HOST) }
  const handleClick = (e) => {
    e.preventDefault();
    console.log(socket)
    // socket.emit('chat',{message})
    // socket.on('chat',(load)=>{
    //   console.log( load)
    // })


  }
<<<<<<< HEAD
>>>>>>> b1266b54056505c9356ef99835c662d1203b11cd
=======
>>>>>>> b1266b54056505c9356ef99835c662d1203b11cd
  return (
    <div >

      this is chat page with soket   io <br />

      <input onChange={(e) => setMessage(e.target.value)} type="text" name='message' placeholder='massage...' />
      <button onClick={handleClick}> Send </button>

    </div>
  );
}

export default chat;