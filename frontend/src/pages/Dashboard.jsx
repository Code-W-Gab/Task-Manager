import AddTask from "../components/admin/AddTask";
import AdminDashboard from "../components/admin/AdminDashboard";
import Navigation from "../components/common/Navigation";

export default function Dashboard() {
  return (
    <Navigation>
      {/* <AdminDashboard/> */}
      <AddTask/>
    </Navigation>
  )
}