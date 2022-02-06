import React, { Component } from 'react';
import { nanoid } from "nanoid";
import {ContactForm, ContactLabel, InputName} from "./Form.styled"

class Form extends Component {
    state = {
        contacts: [],
        name: ''
    };
    
    nameInputId = nanoid();

    handleNameChange = event => {
        this.setState({ name: event.currentTarget.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        // console.log(this.state.name);

        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({
            contacts: [],
            name: ''
        })
    };


    render() {
        return (
            
                <ContactForm onSubmit={this.handleSubmit}>
                    <ContactLabel htmlFor='this.nameInputId'>
                        Name
                        <InputName
                            type="text"
                            value={this.state.name}
                            onChange={this.handleNameChange}
                            id={this.nameInputId}
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </ContactLabel>

                    <button type='submit'>Add contact</button>
                </ContactForm>
                
            
        )
    };
};

export default Form;