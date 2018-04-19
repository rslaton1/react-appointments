/* eslint-disable */
import { AppContainer } from 'react-hot-loader';
/* eslint-enable */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './stores/configure_store';
import App from './components/app';

require('../styles/index.scss');

const store = configureStore();

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./components/app', () => {
    // eslint-disable-next-line
    const NextApp = require('./components/app').default;
    render(NextApp);
  });
}
