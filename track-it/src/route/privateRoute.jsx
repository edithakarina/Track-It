import { Route, useNavigate } from "react-router-dom";

function PrivateRoute({ children, isAuthenticated, ...rest }) {
  const navigate = useNavigate();
  return (
    isAuthenticated ? (
      children
    ) : (
      navigate("/login")
    )
  )
}

export default PrivateRoute;