import UserNavigation from "../../components/common/UserNavigation"
import UserDashboard from "../../components/user/dashboard/userDashboard"

export default function UserDashboardPage() {
  return(
    <UserNavigation>
      <UserDashboard/>
    </UserNavigation>
  )
}