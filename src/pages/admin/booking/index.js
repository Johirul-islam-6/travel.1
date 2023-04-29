import React from 'react';
import LeftsideAdmin from '../../../../components/admin/leftsideAdmin';

const booking = () => {
    return (
        <div className='w-[100%] h-[100vh] flex justify-center '>
            <LeftsideAdmin />

            <div className="w-[80%] bg-slate-400 pt-[9%] px-1 text-black">
                {/* ---------inside body content--------- */}
                <h1 className='text-black text-3xl'>Booking route</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur autem voluptate quos sunt tempora aperiam eligendi ipsam recusandae corporis ducimus commodi inventore quam quidem, sed quod expedita minus a quibusdam accusantium nemo dicta praesentium? Voluptatem ab tempore doloremque eos dignissimos illum eligendi, vero maxime dicta iure perferendis exercitationem sunt amet!
            </div>
        </div>
    );
};

export default booking;