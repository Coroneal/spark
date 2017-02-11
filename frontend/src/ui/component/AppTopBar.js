import React, {Component} from "react";
import {connect} from "react-redux";
import {getSession} from "reducers/authentication";
import {setLocale} from "reducers/locale";
import {locales} from "config/translation";
import LoginForm from "component/LoginForm";
import RaisedButton from "material-ui/RaisedButton";
import IconButton from "material-ui/IconButton";
import AppBar from "material-ui/AppBar";
import IconMenu from "material-ui/IconMenu";
import MapsDirectionsCar from "material-ui/svg-icons/maps/directions-car";
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from "material-ui/Toolbar";
import MenuItem from "material-ui/MenuItem";
import "stylus/container/home/home.styl";


export class AppTopBar extends Component {

  constructor(props) {
    super(props);
    this.state = {isLoginFormOpen: false}
  }

  componentDidMount() {
    this.props.getSession();
  }

  openLoginForm() {
    this.setState({isLoginFormOpen: true})
  }

  onCloseLoginForm() {
    this.setState({isLoginFormOpen: false})
  }

  render() {

    const {currentLocale, setLocale} = this.props;

    const RightSection = ({currentLocale}) => {
      return (
        <div className="app-bar-buttons-group">
          <RaisedButton label={translate('home.topBar.login')} onTouchTap={() => this.openLoginForm()}
                        secondary={true}/>
          <RaisedButton label={translate('home.topBar.register')} secondary={true}/>
          <LocaleSwitcher currentLocale={currentLocale} onLocaleChange={setLocale}/>
          <LoginForm isOpen={this.state.isLoginFormOpen} onClose={() => this.onCloseLoginForm()}/>
        </div>
      );
    };

    const LocaleSwitcher = ({currentLocale, onLocaleChange}) => {

      const localesItems = locales.map(lang => <MenuItem key={lang} value={lang}
                                                         primaryText={translate(`languages.${lang}`)}/>);
      return (
        <IconMenu iconButtonElement={<RaisedButton primary={true} label={currentLocale}></RaisedButton>}
                  onChange={(e, value) => onLocaleChange(value)} value={currentLocale}>
          {localesItems}
        </IconMenu>
      );
    };

    return (
      <AppBar
        title={<span>{translate('home.topBar.appTitle')}</span>}
        iconElementLeft={<IconButton><MapsDirectionsCar /></IconButton>}
        iconElementRight={<RightSection currentLocale={currentLocale}/>}
      />
    );
  }

}

