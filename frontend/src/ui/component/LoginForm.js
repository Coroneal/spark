import React, {Component} from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import AppBar from "material-ui/AppBar";
import TextField from 'material-ui/TextField';
import muiThemeable from 'material-ui/styles/muiThemeable';

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

    const submitButton = <FlatButton label={translate('home.topBar.loginForm.loginSubmit')} keyboardFocused={true}
                                     primary={true} onTouchTap={() => this.handleSubmit()}/>;

    return (
      <Dialog title={<AppBar title={<span>{translate('home.topBar.loginForm.title')}</span>}/>} actions={submitButton} modal={false} open={this.props.isOpen}
              onRequestClose={() => this.props.onClose()} autoScrollBodyContent={true}
              titleStyle={{backgroundColor: this.props.muiTheme.palette.pickerHeaderColor}}>

        <TextField floatingLabelText={translate('home.topBar.loginForm.login')}
                   onChange={(e, newValue) => this.setState({login: newValue})}/>
        <br />
        <br />
        <TextField floatingLabelText={translate('home.topBar.loginForm.password')}
                   onChange={(e, newValue) => this.setState({password: newValue})}/>
      </Dialog>
    );
  }
})
