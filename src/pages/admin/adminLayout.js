import UserFooter from "./user/userFooter";
import UserHeader from "./user/userHeader";
import AdminSideBar from "./adminSidebar";

const AdminDashboardLayout = ({children}) => {
    return ( 
        <>
            <UserHeader/>
            <AdminSideBar/>
            <main>{children}</main>
            <UserFooter/>
        </>
     );
}
 
export default AdminDashboardLayout;