import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import ArchiveIcon from '@material-ui/icons/Archive';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const OnMessageOptions = props => {
    const { history } = props;
    
    const handleBackClick = event => {
        event.preventDefault();
        history.push(history.location.pathname.replace(/\/\d+$/, ''));
    }

    return (
        <div className='options'>
            <IconButton className='button' onClick={handleBackClick}><ArrowBackIcon /></IconButton>
            <div className='group'>
                <IconButton className='button'><ArchiveIcon /></IconButton>
                <IconButton className='button'><ErrorIcon /></IconButton>
                <IconButton className='button'><DeleteIcon /></IconButton>
            </div>
            <div className='group'>
                <IconButton className='button'><MarkunreadIcon /></IconButton>
                <IconButton className='button'><WatchLaterIcon /></IconButton>
                <IconButton className='button'><LibraryAddCheckIcon /></IconButton>
            </div>
        </div>
    )
};

export default OnMessageOptions;