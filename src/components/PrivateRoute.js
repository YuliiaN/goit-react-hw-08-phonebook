import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const isLogged = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  const shouldRedirect = !isLogged && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

export default PrivateRoute;
