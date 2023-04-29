import UserFooter from "./userFooter";
import UserHeader from "./userHeader";
import UserSidebar from "./userSidebar";


const UserDashboardLayout = ({children}) => {
    return ( 
        <>
            <UserHeader/>
            <UserSidebar/>
            <main>{children}</main>
            <UserFooter/>
        </>
     );
}
 
export default UserDashboardLayout;