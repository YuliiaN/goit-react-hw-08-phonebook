import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Section from 'components/Section/Section';
import { Text } from '@chakra-ui/layout';
import Form from 'components/Form/Form';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';

import { selectIsLoggedIn } from 'redux/auth/selectors';
import { selectContacts, selectLoading } from 'redux/contacts/selectors';
import { getContacts } from 'redux/contacts/operations';
import { selectFilter } from 'redux/filter/selectors';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const filter = useSelector(selectFilter);
  const isLogged = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const selectedContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    isLogged && (
      <>
        <Section title="Phonebook">
          <Form></Form>
        </Section>
        <Section title="Contacts">
          {loading && <Loader />}
          {contacts.length ? (
            <>
              <Filter title="Find contacts by name" />
              <ContactsList currentContacts={selectedContacts} />
            </>
          ) : (
            <Text>Your phonebook is empty</Text>
          )}
        </Section>
      </>
    )
  );
};

export default Contacts;
