import React, {Component} from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import TextField from 'material-ui/TextField';

export default class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    }
  }

  handleSubmit() {
    console.log(this.state);
  };

  render() {

    const submitButton = <FlatButton label={translate('home.topBar.loginForm.loginSubmit')}
                                     primary={true} onTouchTap={() => this.handleSubmit()}/>;

    return (
      <Dialog title={translate('home.topBar.loginForm.title')} actions={submitButton} modal={false} open={this.props.isOpen}
              onRequestClose={() => this.props.onClose()} autoScrollBodyContent={true}>

        <TextField floatingLabelText={translate('home.topBar.loginForm.login')}
                   onChange={(e, newValue) => this.setState({login: newValue})}/>
        <br />
        <br />
        <TextField floatingLabelText={translate('home.topBar.loginForm.password')}
                   onChange={(e, newValue) => this.setState({password: newValue})}/>
      </Dialog>
    );
  }
}
