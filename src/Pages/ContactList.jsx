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

const ContactList = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phoneNumbers: ['1234567890', '9876543210']
    },
    {
      id: 2,
      name: 'Jane',
      lastName: 'Doe',
      email: 'jane@example.com',
      phoneNumbers: ['1112223333', '4445556666']
    }
  ]);

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

  const columns = [
    { title: 'Name', field: 'name' },
    { title: 'Last Name', field: 'lastName' },
    { title: 'Email', field: 'email', filtering: true },
    {
      title: 'Phone Numbers',
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
    filtering: true,
    headerStyle: {
      paddingTop: 0,
      paddingBottom: 0,
      whiteSpace: 'nowrap',
      backgroundColor: '#3f51b5',
      color: '#fff',
      height: '50px',
      position: 'sticky',
      top: 0,
      overflow: 'hidden',
      zIndex: 2
    }
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
