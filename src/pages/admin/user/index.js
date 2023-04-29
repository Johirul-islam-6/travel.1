import AdminSidebar from "../../../../components/admin/adminSidebar";

const user = () => {
    return ( 
        <>
            <div className="w-[100%] h-screen flex justify-center">
            <AdminSidebar/>
            <div className="w-[80%] bg-slate-400 pt-[9%] px-1">
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