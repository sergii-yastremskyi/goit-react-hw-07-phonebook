import Contact from '../contact';

import css from './contactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts,addContact,removeContact} from '../redux/contacs-operations'
import { getContacts, getFilter } from '../redux/selectors';
import { useEffect } from "react";
const ContactsList = () => {
const dispatch = useDispatch();
 useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

  const  contacts  = useSelector(getContacts);
  
  const filter = useSelector(getFilter)
  const getVisibleContacts = () => {
   
    const normalizedFilter = filter.toLowerCase();

   return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  const visibleContacts = getVisibleContacts();


  return (
    <ul className={css.contactList}>
      {visibleContacts.map(contact => (
        <Contact key={contact.id}  data={contact} />
      ))}
    </ul>
  );
};

// ContactsList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       phone: PropTypes.string,
//     }),
//   ),
//   onDelete: PropTypes.func,
// };

export default ContactsList;
