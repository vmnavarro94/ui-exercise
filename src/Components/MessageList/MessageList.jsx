import React from 'react';

import Tag from '../Tag/Tag';
import { getAllEmails, getEmailsByTag , formatDate } from '../../Services/emailServices';

import './MessageList.scss';

const MessageList = props => {
    const { history, checkedMails, countChecked } = props;

    const tag = history.location.pathname.split('/')[1] === 'tag' && history.location.pathname.split('/')[2];

    const handleMailClick = id => event => {
        if(event.target.type === 'checkbox')
            return;
        event.preventDefault();
        countChecked(0);
        history.push(`${history.location.pathname}/${id}`);
    }

    const handleCheckChange = event => {
        console.log(checkedMails);
        countChecked(event.target.checked ? checkedMails+1 : checkedMails-1);
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