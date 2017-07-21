import 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import StatePanel from './containers/state-panel';
import { store } from './state';


ReactDOM.render(
    <Provider store={store}>
        <StatePanel />
    </Provider>,
    document.querySelector('#rxjs-playground')
);
