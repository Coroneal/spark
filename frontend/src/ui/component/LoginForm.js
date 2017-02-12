import React, {Component} from "react";
import Dialog from "material-ui/Dialog";
import RaisedButton from "material-ui/RaisedButton";
import TextField from 'material-ui/TextField';
import { browserHistory } from 'react-router';
import muiThemeable from 'material-ui/styles/muiThemeable';

import "stylus/component/login-form.styl";

export default class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      userName: '',
      password: ''
    }
  }

  componentDidMount() {
    this.setState({isOpen: true});
  }

  handleSubmit() {
    const { userName, password } = this.state;
    const { login } = this.props;
    login(userName, password);
  };

  render() {

    const submitButton = <RaisedButton fullWidth={true} label={translate('home.topBar.loginForm.loginSubmit')} keyboardFocused={true}
                                     primary={true} onTouchTap={() => this.handleSubmit()}/>;

    return (
    /*{<Dialog title={translate('home.topBar.loginForm.title')} actions={submitButton} modal={false} open={this.props.isOpen}}*/
      <Dialog title={translate('home.topBar.loginForm.title')} actions={submitButton} modal={false} open={this.state.isOpen}
              onRequestClose={() => browserHistory.goBack()} autoScrollBodyContent={true} contentClassName="login-dialog"
    /*{titleStyle={{backgroundColor: this.props.muiTheme.palette.pickerHeaderColor}}}*/
      >

        <TextField floatingLabelText={translate('home.topBar.loginForm.login')} fullWidth={true}
                   onChange={(e, newValue) => this.setState({userName: newValue})}/>
        <br />
        <br />
        <TextField floatingLabelText={translate('home.topBar.loginForm.password')} fullWidth={true}
                   onChange={(e, newValue) => this.setState({password: newValue})}/>
      </Dialog>
    );
  }
}
