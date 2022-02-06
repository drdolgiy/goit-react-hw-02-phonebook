import React from "react";

const ContactList = ({ FilteredContact, deleteContact }) => {
    return (
        <ul>
            {FilteredContact.map(contact => {
                return (
                    <li key={contact.id}>{contact.name}: {contact.number}
                        <button type="button" onClick={() => deleteContact(contact.id)}>Delete</button>
                    </li>

                )
            })}
        </ul>
    )
};

export default ContactList;