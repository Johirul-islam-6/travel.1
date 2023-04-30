import Head from "next/head";
import AdminSidebar from "../../../components/admin/adminSidebar";

const admin = () => {
    return ( 
        <>
            <Head>
                <title>Admin Dashboard</title>
            </Head>
            <div className="w-[100%] h-screen flex justify-center">
            <AdminSidebar/>
            <div className="w-[90%] lg:w-[80%] bg-slate-100 pt-[9%] px-1">
            {/* -------------body content------------------ */}
            
            </div>
        </div>
        </>
     );
}
 
export default admin;

admin.getLayout = function PageLayout(page) {
    return (
        <>
        {page}
        </>
    )
  }