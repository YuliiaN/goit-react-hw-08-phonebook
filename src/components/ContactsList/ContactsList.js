import { UnorderedList, ListItem } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

const ContactsList = ({ currentContacts }) => {
  const dispatch = useDispatch();

  return (
    <UnorderedList fontSize="md" display="flex" flexDir="column" gap="10px">
      {currentContacts.map(({ id, name, number }) => (
        <ListItem key={id} display="flex" alignItems="center" gap="10px">
          <Text as="b">
            {name}: {number}
          </Text>
          <Button
            size="sm"
            h="25px"
            variant="outline"
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            delete
          </Button>
        </ListItem>
      ))}
    </UnorderedList>
  );
};

ContactsList.propTypes = {
  currentContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ContactsList;
