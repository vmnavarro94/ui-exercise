import React from 'react';
import { NavLink } from 'react-router-dom';

import { getTags as tags} from '../../Services/emailServices';

import './Menu.scss';

const Menu = () => (
    <div className='menu'>
        <NavLink className='link' to='/inbox'>
            Inbox
        </NavLink>
        {tags.map(tag => (
            <NavLink key={tag} className='link' to={`/tag/${tag}`}>
                {tag}
            </NavLink>
        ))}
    </div>
);

export default Menu;