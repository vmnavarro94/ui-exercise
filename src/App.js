import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Logo from './Components/Logo/Logo';
import Compose from './Components/Compose/Compose';
import OnListingOptions from './Components/OnListingOptions/OnListingOptions';
import OnMessageOptions from './Components/OnMessageOptions/OnMessageOptions';
import Menu from './Components/Menu/Menu';
import MessageList from './Components/MessageList/MessageList';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <div className="header">
          <Logo/>
        </div>
        <div className='compose'>
          <Compose/>
        </div>
        <div className='options'>
          <Switch>
            <Route exact path='/inbox' component={OnListingOptions}/>
            <Route exact path='/inbox/:mailId' component={OnMessageOptions}/>
            <Route exact path='/tag/:tag' component={OnListingOptions}/>
            <Route exact path='/tag/:tag/:mailId' component={OnMessageOptions}/>
          </Switch>
        </div>
        <div className='tags'>
          <Menu/>
        </div>
        <div className='content'>
          <Switch>
            <Route path="/inbox" component={MessageList} exact />
            <Route path="/inbox/:id" component={Logo} />
            <Route path="/tag/:tag" component={MessageList} exact />
            <Route path="/tag/:tag/:id" component={Logo} />
            <Redirect from="/" to="/inbox" exact />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
