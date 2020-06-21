import React from 'react';

import Button from '../Button/Button';

const OnMessageOptions = () => (
    <div className='options'>
        <Button>←</Button>
        <Button>Archive</Button>
        <Button>Spam</Button>
        <Button>Trash</Button>
        <Button>Move</Button>
        <Button>Tags</Button>
    </div>
);

export default OnMessageOptions;