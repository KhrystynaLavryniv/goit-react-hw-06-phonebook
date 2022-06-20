import { Contacts } from './ContactList.style';
import { useSelector, useDispatch } from 'react-redux';
import { removeContacts } from '../../redux/contactsSlice';
import { Item, ItemBtn } from './ContactList.style';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const filterVisibleContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const handlerContactDelete = name => {
    dispatch(removeContacts(contacts.filter(contact => name !== contact.name)));
  };
  return (
    <>
      <Contacts>
        {filterVisibleContacts().map(contact => (
          <Item key={contact.id}>
            {contact.name}: {contact.number}
            <ItemBtn onClick={() => handlerContactDelete(contact.name)}>
              Delete
            </ItemBtn>
          </Item>
        ))}
      </Contacts>
    </>
  );
};

export default ContactList;
