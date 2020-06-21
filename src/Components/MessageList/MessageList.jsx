import React from 'react';

import Tag from '../Tag/Tag';

import './MessageList.scss';

const printMail = () => (
    <div className='mail'>
        <div className='detail check'>
            <input type="checkbox"></input>
        </div>
        <div className='detail from'>
            bob.smith@gmail.com
            </div>
        <div className='detail subject'>
            <Tag/>
            <div className='subjText'>Your flight confirmation</div>
            <div className='preview'>
                <span className='separator'>&nbsp;- </span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </div>
        </div>
        <div className='detail date'>
            3/5/2017
            </div>
    </div>
);
const MessageList = () => (
    <div className='mailList'>
        {printMail()}
        {printMail()}
        {printMail()}
        {printMail()}
        {printMail()}
    </div>
);

export default MessageList;