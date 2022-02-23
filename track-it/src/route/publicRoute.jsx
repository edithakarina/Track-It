import {
  Route,
  useNavigate
} from 'react-router-dom';

function PublicRoute({ children, isAuthenticated, ...rest }) {
  const navigate = useNavigate();
  return (
    !isAuthenticated ? (
      children
    ) : (
      navigate("/home")
    )
  );
}

export default PublicRoute;