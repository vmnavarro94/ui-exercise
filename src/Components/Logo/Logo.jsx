import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import './Logo.scss';

const title = 'VnavMail';



const Logo = () => (
    <div className='logo'>
        <MailOutlineIcon className='logoIcon'/>
        <span className='title'>{title}</span>
    </div>
);

export default Logo;