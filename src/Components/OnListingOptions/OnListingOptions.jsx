import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import ArchiveIcon from '@material-ui/icons/Archive';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './OnListingOptions.scss';

const OnListingOptions = ({ isCheck }) => {

    return (<div className='options'>
        {isCheck
            ? (<div className='options'>
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
            </div>)
            : (<div className='options'>
                <IconButton className='button'><RefreshIcon /></IconButton>
            </div>)}
            <IconButton className='button'><MoreVertIcon /></IconButton>
    </div>)
};

export default OnListingOptions;