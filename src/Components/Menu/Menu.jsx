import React from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.scss';

const Menu = () => (
    <div className='menu'>
        <NavLink className='link' to='inbox'>
            Inbox
        </NavLink>
        <NavLink className='link' to='/tag/work'>
            Work
        </NavLink>
        <NavLink className='link' to='/tag/travel'>
            Travel
        </NavLink>
    </div>
);

export default Menu;