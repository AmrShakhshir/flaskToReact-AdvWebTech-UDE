
import React from 'react';
import {Route , Switch} from 'react-router-dom';
import App from './pages/App';
import NotFound from './pages/NotFound';
import Welcome from './pages/Welcome';






export default class Routes extends React.Component{

    render() {

        return(
            <Switch>
                <Route  path='/' component={App} exact />
                <Route  path='/Welcome' component={Welcome} exact />
                <Route   component= {NotFound} />
            </Switch>
       )
    }
};