import { UnorderedList, ListItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';

const AuthNav = () => {
  return (
    <UnorderedList display="flex" gap="50px" listStyleType="none">
      <ListItem>
        <NavLink to={routes.REGISTER}>Signup</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={routes.LOGIN}>Login</NavLink>
      </ListItem>
    </UnorderedList>
  );
};

export default AuthNav;
