import AdminSidebar from "../../../components/admin/adminSidebar";

const admin = () => {
    return ( 
        <>
            <div className="w-[100%] h-screen flex justify-center">
            <AdminSidebar/>
            <div className="w-[80%] bg-slate-400 pt-[9%] px-1">
            {/* -------------body content------------------ */}
            <h1>This is body content</h1>
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