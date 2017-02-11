import React, {Component} from "react";
import Dialog from "material-ui/Dialog";
import RaisedButton from "material-ui/RaisedButton";
import TextField from 'material-ui/TextField';
import muiThemeable from 'material-ui/styles/muiThemeable';

import "stylus/component/login-form.styl";

export default muiThemeable()(class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    }
  }

  handleSubmit() {
    console.log(this.state);
    console.log(this.props.muiTheme.palette);
  };

  render() {

    const submitButton = <RaisedButton fullWidth={true} label={translate('home.topBar.loginForm.loginSubmit')} keyboardFocused={true}
                                     primary={true} onTouchTap={() => this.handleSubmit()}/>;

    return (
      <Dialog title={translate('home.topBar.loginForm.title')} actions={submitButton} modal={false} open={this.props.isOpen}
              onRequestClose={() => this.props.onClose()} autoScrollBodyContent={true} contentClassName="login-dialog"
    /*{titleStyle={{backgroundColor: this.props.muiTheme.palette.pickerHeaderColor}}}*/
      >

        <TextField floatingLabelText={translate('home.topBar.loginForm.login')} fullWidth={true}
                   onChange={(e, newValue) => this.setState({login: newValue})}/>
        <br />
        <br />
        <TextField floatingLabelText={translate('home.topBar.loginForm.password')} fullWidth={true}
                   onChange={(e, newValue) => this.setState({password: newValue})}/>
      </Dialog>
    );
  }
})
