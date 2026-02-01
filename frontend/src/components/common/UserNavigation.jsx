import UserSideBar from "./UserSideBar"
import Header from "./Header"

export default function UserNavigation({ children }) {
  return (
    <div className="flex h-screen">
      <UserSideBar/>
      <div className="flex-1 flex flex-col">
        <Header/>
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}