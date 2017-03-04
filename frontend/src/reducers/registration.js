import { browserHistory } from 'react-router';

const REGISTER = 'registration/LOGIN';
const REGISTER_SUCCESS = 'registration/LOGIN_SUCCESS';
const REGISTER_FAIL = 'registration/LOGIN_FAIL';

const ERROR_MESSAGE = 'registration/ERROR_MESSAGE';

const REDIRECT_TO_LOGIN = 'authentication/REDIRECT_TO_LOGIN';

const initialState = {
  isAuthenticated: false,
  username: null,
  errorMessage: null,
  loading: true
};

// Reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: action.result.data.authenticated,
        username: action.result.data.userName,
        errorMessage: null
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        username: null,
        errorMessage: action.error.data.messageKey
      };

    case ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.message
      };
    default:
      return state;
  }
}

export function displayAuthError(message) {
  return {type: ERROR_MESSAGE, message};
}

export function redirectToLogin(username) {
  return {type: REDIRECT_TO_LOGIN, username};
}

export function register(username, email, password) {
  return {
    types: [REGISTER, REGISTER_SUCCESS, REGISTER_FAIL],
    promise: (client) => client.post('/api/register', {username, email, password}),
    afterSuccess: (dispatch, getState, response) => {
      dispatch(redirectToLogin(username));
      browserHistory.push('/authentication');
    }
  };
}

export function redirectToLoginWithMessage(messageKey) {
  return (dispatch, getState) => {
    const currentPath = getState().routing.locationBeforeTransitions.pathname;
    dispatch(displayAuthError(messageKey));
    browserHistory.replace({pathname: '/login', state: {nextPathname: currentPath}});
  }
}
