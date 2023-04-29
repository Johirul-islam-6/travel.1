import UserDashboardLayout from "./userLayout";


export default function UserDashboard() {
  return (
    <>
    <UserDashboardLayout/>
    </>
  );
}

UserDashboard.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
