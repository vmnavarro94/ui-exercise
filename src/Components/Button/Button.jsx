import React from 'react';

import './Button.scss';

const Button = ({children}) => (
    <button className='button'>
        <span className='content'>{children}</span>
    </button>
);

export default Button;