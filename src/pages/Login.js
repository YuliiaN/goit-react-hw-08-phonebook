import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import LoginForm from 'components/LoginForm/LoginForm';
import Contacts from './Contacts';

const Login = () => {
  const isLogged = useSelector(selectIsLoggedIn);
  return isLogged ? <Contacts /> : <LoginForm />;
};

export default Login;
