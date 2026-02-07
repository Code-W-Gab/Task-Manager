import { useState, useEffect } from "react";
import AdminTeams from "../../components/admin/teams/AdminTeams";
import Navigation from "../../components/common/Navigation";
import AddNewUser from "../../components/admin/teams/AddNewUser";
import { getAllUser } from "../../services/teamService";
import LoadingSpinner from "../../components/common/LoadingSpinner";

export default function Team() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true)

  function FetchUser() {
    setLoading(true)
    getAllUser()
      .then(res => {
        setLoading(false)
        setUsers(res.data)
      })
      .catch(err => {
        setLoading(false)
        console.log(err)
      })
    }

  useEffect(() => {
    FetchUser()
  }, [])

  if (loading) {
    return (
      <Navigation>
        <LoadingSpinner/>
      </Navigation>
    )
  }

  return (
    <Navigation>
      <AdminTeams onAddNewUser={() => setIsModalOpen(true)} users={users} FetchUser={FetchUser}/>

      {isModalOpen && (
        <div className="fixed inset-0 flex bg-gray-800/50 items-center justify-center ">
          <div className="bg-opacity-25">
            <AddNewUser onClose={() => setIsModalOpen(false)} FetchUser={FetchUser}/>
          </div>
        </div>
      )}
    </Navigation>
  )
}