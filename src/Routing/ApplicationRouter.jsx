import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import CreateContact from '../Pages/CreateContact';
import UpdateContact from '../Pages/UpdateContact';
import DeleteContact from '../Pages/DeleteContact';
import ContactList from '../Pages/ContactList';


const ApplicationRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route exact path="/" element={<ContactList/>} />
                    <Route exact path="/create" element={<CreateContact/>} />
                    <Route exact path="/delete/:id" element={<DeleteContact/>} />
                    <Route exact path="/update/:id" element={<UpdateContact/>} />
                </Route>
            </Routes>
        </Router>
    );
};

export default ApplicationRouter;
