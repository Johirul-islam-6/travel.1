import AdminDashboardLayout from "./adminLayout";

export default function AdminDashboard () {
    return ( 
    <>
        <AdminDashboardLayout/>
    </> 
    );
}


AdminDashboard.getLayout = function PageLayout(page) {
    return <>{page}</>;
  };