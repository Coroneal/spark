import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import initStore from 'config/store';
import { setupAxiosInterceptors } from 'rest/axios';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { redirectToLoginWithMessage, logout } from 'reducers/authentication';
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { Router } from 'react-router';
import getRoutes from 'router/router';
import { registerLocales } from 'config/translation';

const store = initStore();
const history = syncHistoryWithStore(browserHistory, store);
global.translate = require('counterpart');

registerLocales(store);
injectTapEventPlugin();

const actions = bindActionCreators({redirectToLoginWithMessage, logout}, store.dispatch);
setupAxiosInterceptors(() => actions.redirectToLoginWithMessage('login.error.unauthorized'));

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history} routes={getRoutes(actions.logout)}/>
    </div>
  </Provider>,
  document.getElementById('root')
);
