import React, { useState } from 'react';
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  FilterList as FilterListIcon,
  ArrowUpward as ArrowUpwardIcon,
  Clear as ClearIcon,
  Search as SearchIcon,
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
  ChevronRight as ChevronRightIcon,
  ChevronLeft as ChevronLeftIcon
} from '@material-ui/icons';
import MaterialTable from 'material-table';
import PageContainer from '../Components/PageContainer/PageContainer';
import { useNavigate } from 'react-router-dom';
import { TextField, IconButton } from '@material-ui/core';

const ContactList = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phoneNumbers: ['1234567890', '9876543210']
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane@example.com',
      phoneNumbers: ['1112223333', '4445556666']
    }
  ]);
  const [firstNameSearch, setFirstNameSearch] = useState('');
  const [lastNameSearch, setLastNameSearch] = useState('');
  const [phoneSearch, setPhoneSearch] = useState('');

  const tableIcons = {
    Search: SearchIcon,
    ResetSearch: ClearIcon,
    SortArrow: ArrowUpwardIcon,
    FirstPage: ArrowBackIcon,
    LastPage: ArrowForwardIcon,
    NextPage: ChevronRightIcon,
    PreviousPage: ChevronLeftIcon,
    Filter: FilterListIcon
  };

  const handleFirstNameSearchChange = (event) => {
    setFirstNameSearch(event.target.value);
  };

  const handleLastNameSearchChange = (event) => {
    setLastNameSearch(event.target.value);
  };

  const handlePhoneSearchChange = (event) => {
    setPhoneSearch(event.target.value);
  };

  const handleFirstNameSearchKeyPress = async (event) => {
    if (event.key === 'Enter') {
      const response = await fetch(`/api/searchByFirstName?firstName=${firstNameSearch}`);
      const data = await response.json();
      setContacts(data);
    }
  };

  const handleLastNameSearchKeyPress = async (event) => {
    if (event.key === 'Enter') {
      const response = await fetch(`/api/searchByLastName?lastName=${lastNameSearch}`);
      const data = await response.json();
      setContacts(data);
    }
  };

  const handlePhoneSearchKeyPress = async (event) => {
    if (event.key === 'Enter') {
      const response = await fetch(`/api/searchByPhone?phone=${phoneSearch}`);
      const data = await response.json();
      setContacts(data);
    }
  };

  const columns = [
    {
      title: (
        <TextField
          label="Search First Name"
          value={firstNameSearch}
          onChange={handleFirstNameSearchChange}
          onKeyPress={handleFirstNameSearchKeyPress}
        />
      ),
      field: 'firstName'
    },
    {
      title: (
        <TextField
          label="Search Last Name"
          value={lastNameSearch}
          onChange={handleLastNameSearchChange}
          onKeyPress={handleLastNameSearchKeyPress}
        />
      ),
      field: 'lastName'
    },
    { title: 'Email', field: 'email' },
    {
      title: (
        <TextField
          label="Search Phone"
          value={phoneSearch}
          onChange={handlePhoneSearchChange}
          onKeyPress={handlePhoneSearchKeyPress}
        />
      ),
      field: 'phoneNumbers',
      render: rowData => (
        <div>
          {rowData.phoneNumbers.map((phone, idx) => (
            <div key={idx}>{phone}</div>
          ))}
        </div>
      )
    }
  ];

  const actions = [
    {
      icon: () => <EditIcon color='primary' />,
      tooltip: 'Edit Contact',
      onClick: (event, rowData) => navigate(`/update/${rowData.id}`)
    },
    {
      icon: () => <DeleteIcon color='secondary' />,
      tooltip: 'Delete Contact',
      onClick: (event, rowData) => navigate(`/delete/${rowData.id}`)
    }
  ];

  const options = {
    actionsColumnIndex: -1,
    toolbar: false
  };

  return (
    <PageContainer containerFor="table">
      <MaterialTable
        title="Contacts List"
        icons={tableIcons}
        columns={columns}
        data={contacts}
        actions={actions}
        options={options}
      />
    </PageContainer>
  );
};

export default ContactList;
