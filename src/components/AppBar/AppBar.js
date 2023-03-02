import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';

const AppBar = () => {
  const isLogged = useSelector(selectIsLoggedIn);

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '30px',
        fontWeight: '700',
        padding: '10px 0',
      }}
    >
      <Navigation />
      {isLogged ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
