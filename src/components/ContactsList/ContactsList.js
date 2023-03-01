import {
  ContactsListStyled,
  ContactsListItem,
  ContactsListButton,
} from './ContactsList.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

const ContactsList = ({ currentContacts }) => {
  const dispatch = useDispatch();

  return (
    <ContactsListStyled>
      {currentContacts.map(({ id, name, number }) => (
        <ContactsListItem key={id}>
          {name}: {number}
          <ContactsListButton
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            delete
          </ContactsListButton>
        </ContactsListItem>
      ))}
    </ContactsListStyled>
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
