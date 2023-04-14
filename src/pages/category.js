
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Carousel from 'react-grid-carousel';

const Category = () => {
  const [transport, setTransport] = useState([]);
  useEffect(() => {
    fetch(`https://assignment-11-server-ridoymia.vercel.app/transports`).then(res => res.json()).then(data => {
      setTransport(data)
    })
  }, [])
  return (
    <div className='container mx-auto py-6'>
      <h2 className='text-2xl text-light-800 text-center py-5 mb-8'>Transport Systeems</h2>
      <Carousel cols={3} rows={1} gap={5} loop className="pt-5">
        {
          transport?.map(t => <Carousel.Item>
            <div className="card sm:w-40 md:w-80 xl:w-96 bg-base-100 shadow-xl">
              <figure><img src={t?.images[0]} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className='text-left text-xl text-primary-focus font-semibold'>{t?.Destinations}</h2>
                <p className='text-left'>{t?.Descriptions.slice(0, 60)}...</p>

                <div className="card-actions justify-between items-center">
                  <h1>Price is : {t?.Price}</h1>
                  <button className='btn btn-slack-400'><Link href={`/Transport/${t?.id}`}>Book Now</Link></button>
                 
                </div>
              </div>
            </div>
          </Carousel.Item>)
        }

      </Carousel>
    </div>
  );
};

export default Category;