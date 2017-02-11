import LoginFormOld from 'component/LoginFormOld';
import {connect} from 'react-redux';
import {login} from 'reducers/authentication';

export default connect(
  state => ({errorMessage: state.authentication.errorMessage}),
  {login}
)(LoginFormOld);
