import React from 'react';

import './Tag.scss';

const Tag = ({tag}) => (
    <span className='tag' title={tag}>{tag}</span>
);

export default Tag;