import sortBy from 'lodash.sortby';
import mails from './emails.json';

const getPreview = (mail, truncate) => (
    new DOMParser().parseFromString(mail.substr(0, truncate), 'text/html').body.textContent
);

const emails = sortBy(mails.messages, 'date').reverse().map(mail => ({
    ...mail, 
    preview: `${getPreview(mail.body, 50)}...`,
}));

export const getTags = [
    ...mails.messages.reduce((tagSet, mail) => {
        mail.tags.forEach(tag => tagSet.add(tag))
        return tagSet
    }, new Set()),
];

export const getAllEmails = () => emails;

export const getEmailsByTag = tag => (
    emails.filter(mail => mail.tags.includes(tag))
);

export const getEmailById = id => (emails.find(mail => mail.id === id))

export const formatDate = date => {
    date = new Date(date);
    return `${date.getDate()<10?'0'+date.getDate():date.getDate()}/${date.getMonth()+1<10?'0'+(date.getMonth()+1):(date.getMonth()+1)}/${date.getFullYear()}`;
}
