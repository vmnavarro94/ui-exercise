import React from 'react';

import Tag from '../Tag/Tag';
import { getAllEmails, getEmailsByTag , formatDate } from '../../Services/emailServices';

import './MessageList.scss';

let checkedMails = 0;

const MessageList = props => {
    const { history } = props;

    const tag = history.location.pathname.split('/')[1] === 'tag' && history.location.pathname.split('/')[2];

    const handleMailClick = id => event => {
        if(event.target.type === 'checkbox')
            return;
        event.preventDefault();
        history.push(`${history.location.pathname}/${id}`);
    }

    const handleCheckChange = event => {debugger;
        const { isSomethingChecked } = props;
        event.target.checked ? checkedMails++ : checkedMails--;
        isSomethingChecked(checkedMails);
    }

    const printMail = mail => (
        <div key={mail.id} className='mail' onClick={handleMailClick(mail.id)}>
            <div className='detail check'>
                <input type="checkbox" onChange={handleCheckChange}></input>
            </div>
            <div className='detail from'>
                {mail.sender}
            </div>
            <div className='detail subject'>
                {mail.tags.map(tag=><Tag key={tag} tag={tag}/>)}
                <div className='subjText'>{mail.subject}</div>
                <div className='preview'>
                    <span className='separator'>&nbsp;- </span>
                    {mail.preview}
                </div>
            </div>
            <div className='detail date'>
                {formatDate(mail.date)}
            </div>
        </div>
    );

    return (<div className='mailList'>
        {
            tag
            ? getEmailsByTag(tag).map(mail => printMail(mail))
            : getAllEmails().map(mail => printMail(mail))
        }
    </div>);
};

export default MessageList;