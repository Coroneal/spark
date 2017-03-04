import RegisterForm from 'component/RegisterForm';
import {connect} from 'react-redux';
import {register} from 'reducers/registration';

export default connect(
  state => ({errorMessage: state.authentication.errorMessage}),
  {register}
)(RegisterForm);
