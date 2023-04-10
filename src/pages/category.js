
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Carousel from 'react-grid-carousel';

const Category = () => {
  const [transport, setTransport] = useState([]);
  useEffect(() => {
    fetch('transport.json').then(res => res.json()).then(data => {
      setTransport(data)
    })
  }, [])
  return (
    <div>
      <Carousel cols={4} rows={1} gap={8} loop>
        {
          transport?.map(t => <Carousel.Item>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure><img src={t?.images[0]} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className='text-left text-xl text-primary-focus font-semibold'>{t?.Destinations}</h2>
                <p className='text-left'>{t?.Descriptions.slice(0, 60)}...</p>

                <div className="card-actions justify-end">
                  <button className='btn btn-slack-400'><Link href={`/transport/${t?.id}`}>Book Now</Link></button>
                 
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