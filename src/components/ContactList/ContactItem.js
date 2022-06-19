// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { removeContacts } from '../../redux/contactsSlice';
import { Item } from './ContactList.style';

const ContactItem = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const filterVisibleContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const handlerContactDelete = name => {
    dispatch(removeContacts(contacts.filter(contact => contact.name !== name)));
  };

  return filterVisibleContacts().map(contact => (
    <Item key={contact.id}>
      {contact.name}: {contact.number}
      <button onClick={() => handlerContactDelete(contact.name)}>Delete</button>
    </Item>
  ));
};

export default ContactItem;

// ContactItem.propTypes = {
//   contactsItem: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
