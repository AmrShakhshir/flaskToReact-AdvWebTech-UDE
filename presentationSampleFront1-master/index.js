import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Routes from './Routes';
import {BrowserRouter as Router} from  'react-router-dom';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Router><Routes/></Router>, document.getElementById('root'));

serviceWorker.unregister();
