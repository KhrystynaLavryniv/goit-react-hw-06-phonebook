import { filterContacts } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FilterInput } from './Filter.style';
import { Label } from '../ContactsForm/ContactsForm.style';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const handlerFilterChange = e => {
    dispatch(filterContacts(e.target.value));
  };
  return (
    <Label>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        autoComplete="off"
        onChange={handlerFilterChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </Label>
  );
};

export default Filter;
