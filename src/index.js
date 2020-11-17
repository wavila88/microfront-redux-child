import React from 'react';
/*import { BrowserRouter as Router , Route } from 'react-router-dom';*/
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {store } from './globalStore/store/store';
/*import * as serviceWorker from './serviceWorker';*/

// render micro frontend function
window.renderCreatereactapp  = (containerId, history) => {

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App history={history}/>,

            </Provider>
        </React.StrictMode>,
        document.getElementById(containerId)
    );
    /*serviceWorker.unregister();*/
};

// unmount micro frontend function
window.unmountCreatereactapp  = containerId => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

// Mount to root if it is not a micro frontend
if (!document.getElementById('Createreactapp-container')) {
    ReactDOM.render(
        <Provider store={store}>
     <App/>
    </Provider>, document.getElementById('micro-app'));
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
