import Link from "next/link";

const AdminSidebar = () => {
    return ( 
        <>
            <div className="w-[20%] bg-black h-screen pt-[20%] text-white">
            <ul className="block">
                <Link href="/admin/user">user</Link> <br/>
                <Link href="/admin/booking">Booking</Link>
            </ul>

            </div>
        </>
     );
}
 
export default AdminSidebar;