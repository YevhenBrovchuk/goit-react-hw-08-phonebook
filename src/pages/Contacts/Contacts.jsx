import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { selectError, selectLoading } from 'redux/selectors';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader';
import { Container, ThumbContact } from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <ThumbContact>
          <ContactForm />
          <Filter />
          {isLoading && !isError && <Loader />}
          <ContactList />
        </ThumbContact>
      </Container>
    </>
  );
}
