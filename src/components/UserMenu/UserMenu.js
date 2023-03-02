import { Box, Button, Text } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box display="flex" flexDir="column" gap="5px">
      <Text>
        Hello, <span style={{ fontWeight: '700' }}>{user.email}</span>!
      </Text>
      <Button
        type="button"
        display="flex"
        alignSelf="flex-end"
        variant="solid"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
