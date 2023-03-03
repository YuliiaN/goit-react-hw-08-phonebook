import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const RestrictedRoute = ({ children, redirectTo = '/' }) => {
  const isLogged = useSelector(selectIsLoggedIn);
  return isLogged ? <Navigate to={redirectTo} /> : children;
};

export default RestrictedRoute;
