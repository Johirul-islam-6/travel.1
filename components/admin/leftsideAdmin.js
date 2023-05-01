import Link from 'next/link';
import React from 'react';

const LeftsideAdmin = () => {
    return (
        <>
            <div className="div w-[20%] bg-black h-[100vh] pt-[20%]">
                <ul className='block'>
                    <Link className='text-white' href="/admin/user">user</Link> <br />
                    <Link className='text-white' href="/admin/booking">Booking</Link>
                </ul>
            </div>

        </>
    );
};

export default LeftsideAdmin;