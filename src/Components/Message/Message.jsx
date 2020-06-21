import React from 'react';
import PersonIcon from '@material-ui/icons/Person';

import { getEmailById, formatDate } from '../../Services/emailServices';

import Tag from '../Tag/Tag';

import './Message.scss';

const getMailIDFromPath = path => {
    const pathArray = path.split('/');
    return pathArray.length === 3 ? pathArray[2] : pathArray[3];
}

const Message = props => {
    
    const { history } = props;
    const mail = getEmailById(getMailIDFromPath(history.location.pathname));
    
    return (<div className='msgContainer'>
        <div className='msgHeader'>
            <div className='msgSubject'>{mail.subject}</div>
            <div className='msgTags'>
                {mail.tags.map(tag => (
                    <Tag key={tag} tag={tag}/>
                ))}
            </div>
        </div>
        <div className='msgContent'>
            <div className='msgAvatar'>
                <PersonIcon />
            </div>
            <div className='msgFrom'>
                {mail.sender}
            </div>
            <div className='msgDate'>
                {formatDate(mail.date)}
            </div>
            <div className='msgBody'>
                <div dangerouslySetInnerHTML={{__html: mail.body}}></div>
            </div>
        </div>
    </div>)
};

export default Message;