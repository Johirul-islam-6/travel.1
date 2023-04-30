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