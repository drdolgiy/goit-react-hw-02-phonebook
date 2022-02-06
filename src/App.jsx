import './App.css';
import React, { Component } from 'react';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { nanoid } from "nanoid";


class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
        name: '',
        number: ''
    };

    addContact = data => {

        const findContact = this.state.contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase());

        if (findContact) { return alert(`${findContact.name} is already in contacts`); }


        const contact = {
            id: nanoid(),
            name: data.name,
            number: data.number
        };

        this.setState(prevState => ({
            contacts: [contact, ...prevState.contacts],
        }));

    };

    deleteContact = (id) => {
        this.setState(prevState => ({
            contacts: [...prevState.contacts.filter((contact) => contact.id !== id)],
        }));
    };

    changeFilter = event => {
        this.setState({ filter: event.currentTarget.value });
    };

    getFilteredContact = () => {
        const { filter, contacts } = this.state;

        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter));
    };

    render() {

        const { filter, contacts } = this.state;

        return (
            <div className='App'>

                <h1>Phonebook</h1>

                <Form onSubmit={this.addContact}></Form>

                <Filter value={filter} onChange={this.changeFilter} />

                <h2>Contacts</h2>

                <ContactList contacts={contacts}
                    filteredContact={this.getFilteredContact()}
                    deleteContact={this.deleteContact} />

            </div>
        );
    }
};

export default App;