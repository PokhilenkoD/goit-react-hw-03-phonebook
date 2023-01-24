import { ContactsForm } from 'components/ContactsForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from 'components/Filter/Filter';
import { AppBox, MainTitle, SubTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  componentDidMount() {
    const storageArray = JSON.parse(localStorage.getItem('contacts'));
    if (storageArray) {
      this.setState({ contacts: [...storageArray] });
    }
  }

  addsNameContacts = value => {
    const verifyContact = this.state.contacts.some(contact => {
      return contact.name.toLowerCase() === value.name.toLowerCase();
    });
    if (verifyContact) {
      alert(`${value.name} is already in contacts`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [
            ...prevState.contacts,
            {
              id: nanoid(),
              name: value.name,
              number: value.number,
            },
          ],
        };
      });
    }
  };

  handleChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  deleteContacts = ev => {
    const value = ev.target.previousSibling.textContent;
    const filtredArray = this.state.contacts.filter(contact => {
      return contact.number !== value;
    });
    this.setState({ contacts: [...filtredArray] });
  };

  render() {
    const contacts = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(this.state.filter);
    });
    const filterValue = this.state.filter;

    return (
      <AppBox>
        <MainTitle>Phonebook</MainTitle>
        <ContactsForm addsContacts={this.addsNameContacts} />
        <SubTitle>Contacts</SubTitle>
        <Filter filterValue={filterValue} handleChange={this.handleChange} />
        <ContactsList contacts={contacts} deleteContact={this.deleteContacts} />
      </AppBox>
    );
  }
}
