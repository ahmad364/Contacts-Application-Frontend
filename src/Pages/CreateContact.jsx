import React, { useState } from 'react';
import { TextField, Button, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import PageContainer from '../Components/PageContainer/PageContainer';
import { v4 as uuidv4 } from 'uuid';
import './Styles.css';

function CreateContact() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneFields, setPhoneFields] = useState([{ id: uuidv4(), value: '' }]);

    const handleAddPhoneField = () => {
        const newPhoneField = { id: uuidv4(), value: '' };
        setPhoneFields([...phoneFields, newPhoneField]);
    };

    const handlePhoneChange = (id, newValue) => {
        const updatedFields = phoneFields.map(field =>
            field.id === id ? { ...field, value: newValue } : field
        );
        setPhoneFields(updatedFields);
    };

    const handleDeletePhoneField = id => {
        if (phoneFields.length > 1) {
            const updatedFields = phoneFields.filter(field => field.id !== id);
            setPhoneFields(updatedFields);
        }
    };

    const renderPhoneFields = () => {
        return phoneFields.map((field, index) => (
            <div key={field.id} className='form-control'>
            <label htmlFor={`phone-${index}`}>Phone Number {index + 1}</label>
                <div className='phone-textfield-container'>
                    <TextField
                        size='small'
                        variant="outlined"
                        value={field.value}
                        type='number'
                        style={{ width: '100%' }} // Set the width to 300px
                        onChange={e => handlePhoneChange(field.id, e.target.value)}
                    />
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleDeletePhoneField(field.id)}
                        startIcon={<DeleteIcon />}
                    >
                    </Button>
                </div>
            </div>
        ));
    };

    const handleSubmit = () => {
        // Check if any required field is empty
        if (!name || !lastName || !email || phoneFields.some(field => !field.value)) {
            alert("Please fill in all required fields.");
            return; // Prevent form submission if any required field is empty
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return; // Prevent form submission if email is not valid
        }

        // Phone number validation
        if (phoneFields.some(field => field.value.length < 12)) {
            alert("Phone number must be more than 11 digits.");
            return; // Prevent form submission if any phone number is invalid
        }

        const formData = {
            name: name,
            lastName: lastName,
            email: email,
            phoneNumbers: phoneFields.map(field => field.value)
        };

        console.log(formData);
        // You can submit formData here
    };

    return (
        <PageContainer>
            <div className='tittle'>
                <h1 className="title">Add New Contact</h1> {/* Added Title */}
            </div>
            <form>
                <div className='form-control'>
                    <label htmlFor="name">Name</label>
                    <TextField
                        size='small'
                        variant="outlined"
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor="lastName">Last Name</label>
                    <TextField
                        size='small'
                        variant="outlined"
                        id="lastName"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
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
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                {renderPhoneFields()}
            </form>
            <Button style={{ marginBottom: "15px", marginTop: "15px" }} variant="outlined" color="primary" onClick={handleAddPhoneField}>
                Add new Phone
            </Button>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
            </Button>
        </PageContainer>
    );
}

export default CreateContact;
