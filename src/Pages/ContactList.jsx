import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MaterialTable from 'material-table';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import TableContainer from '../Components/PageContainer/TableContainer';
import { Edit, FilterList } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';

function ContactList() {
    
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

    return (
        <TableContainer>
            <MaterialTable
                title="Contacts List"
                icons={{
                    Search: SearchIcon,
                    ResetSearch: ClearIcon,
                    SortArrow: ArrowUpwardIcon,
                    ResetSearch: ClearIcon,
                    FirstPage: ArrowBackIcon,
                    LastPage: ArrowForwardIcon,
                    NextPage: ChevronRightIcon,
                    PreviousPage: ChevronLeftIcon,
                    Filter: FilterList // Define filter icon
                }}
                columns={[
                    { title: 'Name', field: 'name' },
                    { title: 'Last Name', field: 'lastName' },
                    { title: 'Email', field: 'email', filtering: true},
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
                ]}
                data={contacts}
                actions={[
                    {
                        icon: () => <Edit color='primary' />,
                        tooltip: 'Edit Contact',
                        onClick: (event, rowData) => navigate(`/update/${rowData.id}`)
                    },
                    {
                        icon: () => <DeleteIcon color='secondary' />,
                        tooltip: 'Delete Contact',
                        onClick: (event, rowData) => navigate(`/delete/${rowData.id}`)
                    }
                ]}
                options={{
                    actionsColumnIndex: -1,
                    filtering: true
                }}
            />
        </TableContainer>
    );
}

export default ContactList;
