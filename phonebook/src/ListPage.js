import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const ListPage = () => {
    const [contacts, SetContacts] = useState([]);

    useEffect(() => {
        axios.get('/api/contacts')
        .then (response => SetContacts(response.data))
        .catch(error => console.error(error));
    },[]
    );

    const handleDelete = (id) => {
        axios.delete('/api/contacts/{id}')
        .then(() => 
    SetContacts(contacts.filter(contacts =>contacts.id !== id)))
        .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Contact List</h1>
            <ul>
                {contacts.map(contacts => (
                    <li  key = {contacts.id}>
                        {contacts.name} - {contacts.contactNumber}
                        <Link to={'/edit/$ {contacts.id}' }>Edit</Link>
                        <button onClick={()=> handleDelete(contacts.id)}>Delete</button>
                    </li>
                ))
                }
            </ul>
            <Link to="/add">Add Contacts</Link>
            </div>
    );
}
 export default ListPage;