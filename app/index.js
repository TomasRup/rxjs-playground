import 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Demo from './containers/demo';
import { store } from './state';


ReactDOM.render(
  <Provider store={store}>
    <Demo />
  </Provider>,
  document.querySelector('#rxjs-playground')
);
