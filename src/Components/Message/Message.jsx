import React from 'react';
import PersonIcon from '@material-ui/icons/Person';

import Tag from '../Tag/Tag';

import './Message.scss';

const Message = () => (
    <div className='msgContainer'>
        <div className='msgHeader'>
            <div className='msgSubject'>Your flight confirmation</div>
            <div className='msgTags'>
                <Tag/>
                <Tag/>
            </div>
        </div>
        <div className='msgContent'>
            <div className='msgAvatar'>
                <PersonIcon/>
            </div>
            <div className='msgFrom'>
                bob.smith@gmail.com
            </div>
            <div className='msgDate'>
                3/5/2017
            </div>
            <div className='msgBody'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia vestibulum eros, a aliquet odio fermentum et. Fusce in volutpat est, eu aliquam ante. Integer at sapien sit amet nisl venenatis ullamcorper eu sed magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a odio vitae risus dictum pellentesque in vehicula leo. Nam massa sem, pretium at lacus quis, aliquam facilisis odio. Maecenas risus purus, dapibus sed viverra a, efficitur eget leo. Integer quis magna id ante ornare euismod. Nunc aliquet arcu sit amet tincidunt feugiat. Ut et sapien ut leo blandit egestas a non arcu.</p><p>Sed finibus rhoncus nulla, eu molestie urna volutpat non. Etiam molestie faucibus nisi eget molestie. Vestibulum porta a leo a scelerisque. Mauris eget nisl sapien. Aliquam consectetur sed massa eget accumsan. Pellentesque eget arcu quam. Vivamus feugiat lacinia laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis quam vitae lorem rhoncus viverra vel et dolor. Sed pharetra cursus risus sit amet accumsan.</p>
            </div>
        </div>
    </div>
);

export default Message;