import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { routes } from 'routes';

const Navigation = () => {
  const isLogged = useSelector(selectIsLoggedIn);

  return (
    <nav style={{ display: 'flex', gap: '50px' }}>
      <NavLink to={routes.HOME}>Home</NavLink>
      {isLogged && <NavLink to={routes.CONTACTS}>Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;
