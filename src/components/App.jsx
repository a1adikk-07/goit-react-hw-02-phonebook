import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  isDublicate({ name }) {
    const { contacts } = this.state;
    const normalizeName = name.toLowerCase();
    const dublicate = contacts.find(item => {
      // const normalizeCurrentName = item.name.toLowerCase();
      return item.name.toLowerCase() === normalizeName;
      // return normalizeCurrentName === normalizeName;
    });
    // return Boolean(dublicate);
  }
  addContact = data => {
    if (this.isDublicate(data)) {
      return alert(`${data.name} is already to contact`);
    }
    this.setState(({ contacts }) => {
      const newContact = { id: nanoid(), ...data };
      return { contacts: [...contacts, newContact] };
    });
  };
  deleteContact = id => {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(item => item.id !== id);
      return { contacts: newContacts };
    });
  };
  changeFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };
  getFilteredContacts() {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contacts => {
      const normalizedName = contacts.name.toLowerCase();
      return normalizedName.includes(normalizedFilter);
    });
    return filteredContacts;
  }
  render() {
    const { addContact, deleteContact, changeFilter } = this;
    const contacts = this.getFilteredContacts();
    return (
      <div>
        <h1>Phone book</h1>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter changeFilter={changeFilter} />
        <ContactList item={contacts} deleteContact={deleteContact} />
      </div>
    );
  }
}

export default App;
