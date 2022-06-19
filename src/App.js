import { useSelector } from 'react-redux';
import ContactsForm from './components/ContactsForm/ContactsForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import { Container } from 'components/ContactsForm/ContactsForm.style';

export default function App() {
  const contacts = useSelector(state => state.contacts.items);
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <p>Phonebook does not contain any saved contacts</p>
      )}
      <ContactList />
    </Container>
  );
}
