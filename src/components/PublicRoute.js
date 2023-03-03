import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const token = useSelector(state => state.auth.token);
  return token ? <Navigate to="/contacts" /> : <Outlet />;
};

export default PublicRoute;
