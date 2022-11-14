

import styles from './components/shared/shared.module.css';
import { css } from 'styled-components';
import Form from './components/form/';
import ContactsList from './components/contactsList/';
import Filter from './components/filter';
export default function App() {
  return (
    <>
        <div className={(styles.container, styles.border)}>
        <h1>Phonebook</h1>
          <Form/>
        </div>
        <div className={styles.container}>
          <h1>Contacts</h1>
          <Filter
            className={css.filter}
          />
          <ContactsList
            className={styles.contactList}  
          />
        </div>
      </>
  )
}

