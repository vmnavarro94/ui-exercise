import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Logo from './Components/Logo/Logo';
import Compose from './Components/Compose/Compose';
import OnListingOptions from './Components/OnListingOptions/OnListingOptions';
import OnMessageOptions from './Components/OnMessageOptions/OnMessageOptions';
import Menu from './Components/Menu/Menu';
import MessageList from './Components/MessageList/MessageList';
import Message from './Components/Message/Message';

import './App.scss';

const history = createBrowserHistory();
class App extends Component {

  state = {
    isSomethingChecked: false,
  }

  verifyIfSomethingChecked = checkedMails => {
    this.setState({isSomethingChecked: checkedMails > 0}); 
  }

  render() {
    const { isSomethingChecked } = this.state;
    return (
      <BrowserRouter history={history}>
        <div className="layout">
          <div className="header">
            <Logo />
          </div>
          <div className='compose'>
            <Compose />
          </div>
          <div className='options'>
            <Switch>
              <Route exact path='/inbox'>
                <OnListingOptions isCheck={isSomethingChecked}/>
              </Route>
              <Route exact path='/inbox/:mailId' component={OnMessageOptions} />
              <Route exact path='/tag/:tag'>
                <OnListingOptions isCheck={isSomethingChecked}/>
              </Route>
              <Route exact path='/tag/:tag/:mailId' component={OnMessageOptions}/>
            </Switch>
          </div>
          <div className='tags'>
            <Menu />
          </div>
          <div className='content'>
            <Switch>
              <Route exact path="/inbox" render={(props) => <MessageList isSomethingChecked={this.verifyIfSomethingChecked} {...props} />}/>
              <Route path="/inbox/:id" component={Message} />
              <Route exact path="/tag/:tag" render={(props) => <MessageList isSomethingChecked={this.verifyIfSomethingChecked} {...props} />}/>
              <Route path="/tag/:tag/:id" component={Message} />
              <Redirect exact from="/" to="/inbox" />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
