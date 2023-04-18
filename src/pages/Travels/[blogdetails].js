import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from '../../styles/mainService.module.css';


const Blogdetails = () => {
    const router = useRouter();
    const id = router.query.blogdetails;

    const[single,setSingle] = useState({});
    useEffect(()=>{
        fetch(`https://assignment-11-server-ridoymia.vercel.app/blog/${id}`)
        .then(res => res.json())
        .then(data =>{
            setSingle(data);
            console.log(data)
        })
    },[id])

    return (
        <div className="container mx-auto py-5">
            <div>
                <h2 className="text-center text-xl font-bold">{single?.title}</h2>
                <p className="text-left">{single?.description?.slice(0,100)}</p>
                <img className={styles.BlogImg} src={single?.img}></img>
                <p>{single?.description?.slice(101,5000)}</p>
            </div>
        </div>
    );
};

export default Blogdetails;