import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import PageContainer from '../Components/PageContainer/PageContainer';
import DeleteIcon from '@material-ui/icons/Delete';
import { useNavigate,useParams } from 'react-router-dom';
import './Styles.css';

function DeleteContact() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneFields, setPhoneFields] = useState([]);

    useEffect(() => {
        // Sample data for the contact
        const sampleContact = {
            name: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phoneNumbers: ['1234567890', '9876543210']
        };

        // Populate fields with sample data
        setName(sampleContact.name);
        setLastName(sampleContact.lastName);
        setEmail(sampleContact.email);
        setPhoneFields(sampleContact.phoneNumbers.map(number => ({ id: number, value: number })));
    }, []);

    const renderPhoneFields = () => {
        return phoneFields.map((field, index) => (
            <div key={field.id} className='form-control'>
                <label htmlFor={`phone-${index}`}>Phone Number# {index + 1}</label>
                <TextField
                    size='small'
                    variant="outlined"
                    value={field.value}
                    type='number'
                    disabled // Make the text field non-editable
                />
            </div>
        ));
    };

    const handleDeleteContact = () => {
        // Logic to delete the contact
        console.log("Contact deleted successfully!");
        navigate('/');

    };

    return (
        <PageContainer>
            <div className='tittle'>
                <h1 className="title">Delete Contact</h1>
            </div>
            <form>
                <div className='form-control'>
                    <label htmlFor="name">Name</label>
                    <TextField
                        size='small'
                        variant="outlined"
                        id="name"
                        value={name}
                        disabled // Make the text field non-editable
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor="lastName">Last Name</label>
                    <TextField
                        size='small'
                        variant="outlined"
                        id="lastName"
                        value={lastName}
                        disabled // Make the text field non-editable
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <TextField
                        size='small'
                        variant="outlined"
                        id="email"
                        type="email"
                        value={email}
                        disabled // Make the text field non-editable
                    />
                </div>
                {renderPhoneFields()}
            </form>
            <Button style={{ marginBottom: "15px", marginTop: "15px" }} variant='contained' color="secondary" onClick={handleDeleteContact} startIcon={<DeleteIcon />}>
                Delete
            </Button>
        </PageContainer>
    );
}

export default DeleteContact;
