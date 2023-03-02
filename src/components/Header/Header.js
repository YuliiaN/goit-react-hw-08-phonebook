import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { routes } from 'routes';

const Header = () => {
  const isLogged = useSelector(selectIsLoggedIn);

  return (
    <>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '30px',
          fontWeight: '700',
        }}
      >
        <Link to={routes.HOME} className="active">
          Home
        </Link>
        {isLogged ? <UserMenu /> : <AuthNav />}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
