import Link from "next/link";

const AdminSidebar = () => {
    return ( 
        <>
            <div className="w-[20%] bg-black h-screen pt-[20%] text-white">
            <ul className="block">
                <Link href="/admin/user">Dashboard</Link> <br/>
                <Link href="/admin/order">My Order</Link>
            </ul>

            </div>
        </>
     );
}
 
export default AdminSidebar;