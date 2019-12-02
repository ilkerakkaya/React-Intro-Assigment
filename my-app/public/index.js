import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App';
import * as serviceWorker from '../src/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
