import Link from 'next/link';
import React from 'react';
import LeftsideAdmin from '../../../components/admin/leftsideAdmin';

const admin = () => {
    return (
        <div className='w-[100%] h-[100vh] flex justify-center '>
            <LeftsideAdmin />

            <div className="w-[80%] bg-slate-400">

            </div>
        </div>
    );
};

export default admin;