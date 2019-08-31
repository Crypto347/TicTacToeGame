/**
 * Libraries
 */

import React from 'react';
import ReactDOM from 'react-dom';

import {
    Provider
} from 'react-redux';
import configureStore,{
    history
} from './store/store';


import {
    ConnectedRouter,
} from 'connected-react-router';
import store from './store/store';

// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
/**
 * Components
 */

import App from './app';
import App4x4 from './components/app4x4';
import Welcome from './components/WelcomePage/welcomePage';
import Login from './components/WelcomePage/Login/login';
import SignUp from './components/WelcomePage/SignUp/signUp';

// const store = configureStore()


ReactDOM.render(
    <Provider store={store}>
       <ConnectedRouter history={history}>
         <App/>
       </ConnectedRouter>
    </Provider>,
   document.getElementById('app')
);


// const routing = (
//     <Router>
//       <div>
//         <Route exact path="/" component={App} />
//         <Route path="/Welcome" component={Welcome} />
//       </div>
//     </Router>
//   )
//   ReactDOM.render(routing, document.getElementById('root'))


