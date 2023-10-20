import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectContacts, selectFilter } from 'redux/selectors';
import { TextReg } from 'components/RegisterForm/RegisterForm.styled';
import {
  ContactsList,
  ContactsListItem,
  ButtonDel,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilter).toLowerCase();

  const handleDelete = e => {
    dispatch(deleteContact(e.currentTarget.id));
  };

  const isExistContacts = () => {
    if (!filteredContacts || filteredContacts === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filteredContacts)
    );
  };

  const existContacts = isExistContacts();

  return (
    <ContactsList>
      {existContacts.map(({ id, name, number }) => (
        <ContactsListItem key={id}>
          {name}: {number}
          <ButtonDel type="button" id={id} onClick={handleDelete}>
            <TextReg>Delete</TextReg>
          </ButtonDel>
        </ContactsListItem>
      ))}
    </ContactsList>
  );
};
