import Head from "next/head";
import UserSidebar from "../../../../components/admin/userSidebar";

const user = () => {
    return ( 
        <>
            <Head>
                <title>User Dashboard</title>
            </Head>
            <div className="w-[100%] h-screen flex justify-center">
            <UserSidebar/>
            <div className="w-[80%] bg-slate-100 pt-[9%] px-1">
            {/* -------------body content------------------ */}
            <h1>user page</h1>
            </div>
        </div>
        </>
     );
}
 
export default user;

user.getLayout = function PageLayout(page) {
    return (
        <>
        {page}
        </>
    )
  }


//   <div className=" w-[10%] lg:w-[20%] min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
//         <div className="fixed flex flex-col top-0 left-0 w-48 md:w-56 lg:w-64 bg-white h-full border-r">
//           <div className="flex items-center justify-center h-14 border-b">
//             <Link href="/" className="cursor-pointer p-10 md:p-7 lg:p-4">
//               <Image
//                 src="https://i.ibb.co/Z2SgSq2/travel-xone.png"
//                 alt="TRAVEL.XONE LOGO"
//                 width={600}
//                 height={450}
//                 loading="lazy"
//               />
//             </Link>
//           </div>
//           <div className="overflow-y-auto overflow-x-hidden flex-grow">
//             <ul className="flex flex-col py-4 space-y-1">
//               <li className="px-5">
//                 <div className="flex flex-row items-center h-8">
//                   <div className="text-sm font-light tracking-wide text-gray-500">
//                     Menu
//                   </div>
//                 </div>
//               </li>
//               <li>
//                 <a href="/admin/user" className={iconStyle}>
//                   <span className="inline-flex justify-center items-center ml-4">
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
//                       ></path>
//                     </svg>
//                   </span>
//                   <span className="ml-2 text-sm tracking-wide truncate">
//                     Dashboard
//                   </span>
//                 </a>
//               </li>
//               <li>
//                 <a href="/admin/user/booking" className={iconStyle}>
//                   <span className="inline-flex justify-center items-center ml-4">
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
//                       ></path>
//                     </svg>
//                   </span>
//                   <span className="ml-2 text-sm tracking-wide truncate">
//                     My bookings
//                   </span>
//                 </a>
//               </li>
//               <li>
//                 <a href="/admin/user/inbox" className={iconStyle}>
//                   <span className="inline-flex justify-center items-center ml-4">
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
//                       ></path>
//                     </svg>
//                   </span>
//                   <span className="ml-2 text-sm tracking-wide truncate">
//                     Inbox
//                   </span>
//                 </a>
//               </li>
//               <li>
//                 <a href="/admin/user/reviews" className={iconStyle}>
//                   <span className="inline-flex justify-center items-center ml-4">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       fill="currentColor"
//                       class="bi bi-star"
//                       viewBox="0 0 16 16"
//                     >
//                       {" "}
//                       <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />{" "}
//                     </svg>
//                   </span>
//                   <span className="ml-2 text-sm tracking-wide truncate">
//                     Reviews
//                   </span>
//                 </a>
//               </li>
//               <li>
//                 <a href="/admin/user/invoices" className={iconStyle}>
//                   <span className="inline-flex justify-center items-center ml-4">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       fill="currentColor"
//                       class="bi bi-bank2"
//                       viewBox="0 0 16 16"
//                     >
//                       {" "}
//                       <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z" />{" "}
//                     </svg>
//                   </span>
//                   <span className="ml-2 text-sm tracking-wide truncate">
//                     Invoices
//                   </span>
//                 </a>
//               </li>

//               <li className="px-5">
//                 <div className="flex flex-row items-center h-8">
//                   <div className="text-sm font-light tracking-wide text-gray-500">
//                     Settings
//                   </div>
//                 </div>
//               </li>
//               <li>
//                 <a href="/admin/user/profile" className={iconStyle}>
//                   <span className="inline-flex justify-center items-center ml-4">
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                       ></path>
//                     </svg>
//                   </span>
//                   <span className="ml-2 text-sm tracking-wide truncate">
//                     Profile
//                   </span>
//                 </a>
//               </li>
//               <li>
//                 <a href="/admin/user/setting" className={iconStyle}>
//                   <span className="inline-flex justify-center items-center ml-4">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       fill="currentColor"
//                       class="bi bi-gear"
//                       viewBox="0 0 16 16"
//                     >
//                       {" "}
//                       <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />{" "}
//                       <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />{" "}
//                     </svg>
//                   </span>
//                   <span className="ml-2 text-sm tracking-wide truncate">
//                     Settings
//                   </span>
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className={iconStyle}>
//                   <span className="inline-flex justify-center items-center ml-4">
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//                       ></path>
//                     </svg>
//                   </span>
//                   <span className="ml-2 text-sm tracking-wide truncate">
//                     Logout
//                   </span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>