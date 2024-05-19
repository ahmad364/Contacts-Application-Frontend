import React from 'react';
import './Layout.css';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div className='container'>
            <Header />
            <div className='body'>
                <Outlet/>
            </div>
        </div>
    );
}

export default Layout;
