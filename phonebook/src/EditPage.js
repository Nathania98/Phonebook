import React,{useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import axios from 'axios';

const EditPage = () => {
    const {id} = useParams();
    const history = useHistory();
    const [name, setName] = useState('');
    const[contactNumber, setContactNumber] = useState('');

    useEffect(()=> {
        if (id) {
            axios.get('/api/contacts/{id}')
            .then(response => {setName(response.data.name);
            setContactNumber(response.data.contactNumber);
        })
        .catch(error => console.error(error));
        } 
    }, [id]);

    
        const handleSubmit =(e) => {
            e.preventDefault();

            const contacts ={ name, contactNumber};

            if(id){
                axios.put('/api/contacts/{id}', contacts)
                .then(()=> history.push('/'))
                .catch(error => console.error(error));
            }
            else {
                axios.post('/api/contacts', contacts)
                .then(()=> history.push('/'))
                .catch(error => console.error(error));
            }
        
         };
        return(
            <div>
                <h1>{id ? 'Edit Contacts' : 'Add Contact'}</h1>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required/>
                    <label>Contact Number:</label>
                    <input type ="text" value={contactNumber} onChange ={(e) => setContactNumber(e.target.value)} required/>

                    <button type = "submit">Update</button>
                </form>
            </div>
        );
    }

    export default EditPage;
