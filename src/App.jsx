import './App.css';
import React, { Component } from 'react';
import Form from './Form/Form'; 
import { nanoid } from "nanoid";


class App extends Component {
    state = {
        contacts: [],
        filter: '',
        name: '',
        number: ''
    };

    formSubmitHandler = data => {
        // console.log(data.number)

        const contact = {
            id: nanoid(),
            name: data.name,
            number: data.number
        };

        this.setState(prevState => ({
            contacts: [contact, ...prevState.contacts],
        }));

    };

    render() {
        return ( 
            <div className='App'>

                <h1>Phonebook</h1>          

                <Form onSubmit={this.formSubmitHandler}></Form>

                <h2>Contacts</h2>

                <ul>
                    {this.state.contacts.map(({name,number, id}) => {
                        return (
                            <li key={id}>{name}: {number}</li>
                        )
                    })}
                </ul> 
                    
            </div>
        );
    }
};

export default App;