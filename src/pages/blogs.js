import Link from "next/link";
import { useEffect, useState } from "react";

const Blogs = () => {
  const[blogs,setBlogs] = useState([]);
  useEffect(()=>{
    fetch(`https://assignment-11-server-ridoymia.vercel.app/blogs`).then(res => res.json()).then(data => {
      setBlogs(data)
    })
  },[])
  return (
    <>
      <div className="container mx-auto">
         <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
             {
              blogs?.map(b =><div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure><img src={b?.img} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">{b?.title}</h2>
                <p>{b?.description.slice(0,120)}..</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary"><Link href={`Travels/${b?._id}`}>Details</Link></button>
                </div>
              </div>
            </div>)
             }
         </div>
      </div>
    </>
  );
};

export default Blogs;
