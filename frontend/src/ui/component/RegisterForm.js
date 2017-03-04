import React, {Component} from "react";
import Dialog from "material-ui/Dialog";
import RaisedButton from "material-ui/RaisedButton";
import TextField from 'material-ui/TextField';
import { browserHistory } from 'react-router';

import "stylus/component/login-form.styl";

export default class RegisterForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      userName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  componentDidMount() {
    this.setState({isOpen: true});
  }

  handleSubmit() {
    const { userName, email, password } = this.state;
    const { register } = this.props;
    register(userName, email, password);
  };

  render() {

    const submitButton = <RaisedButton fullWidth={true} label={translate('home.topBar.registerForm.registerSubmit')} keyboardFocused={true}
                                     primary={true} onTouchTap={() => this.handleSubmit()}/>;

    return (
      <Dialog title={translate('home.topBar.registerForm.title')} actions={submitButton} modal={false} open={this.state.isOpen}
              onRequestClose={() => browserHistory.goBack()} autoScrollBodyContent={true} contentClassName="login-dialog">

        <TextField floatingLabelText={translate('home.topBar.registerForm.login')} fullWidth={true}
                   onChange={(e, newValue) => this.setState({userName: newValue})}/>
        <TextField floatingLabelText={translate('home.topBar.registerForm.email')} fullWidth={true}
                   onChange={(e, newValue) => this.setState({email: newValue})}/>
        <TextField floatingLabelText={translate('home.topBar.registerForm.password')} fullWidth={true}
                   onChange={(e, newValue) => this.setState({password: newValue})}/>
        <TextField floatingLabelText={translate('home.topBar.registerForm.confirmPassword')} fullWidth={true}
                   onChange={(e, newValue) => this.setState({confirmPassword: newValue})}/>
      </Dialog>
    );
  }
}
