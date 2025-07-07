import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const ProtectedAdminRoute = ({ children }) => {
  const user = useSelector((state) => state.user.currentUser)

  if (!user) return <Navigate to="/login" />
  if (!user.isAdmin) return <Navigate to="/not-authorized" />

  return children
}

export default ProtectedAdminRoute
