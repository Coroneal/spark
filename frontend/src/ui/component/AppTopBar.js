import React, {Component} from "react";
import {connect} from "react-redux";
import {getSession} from "reducers/authentication";
import {setLocale} from "reducers/locale";
import {locales} from "config/translation";
import LoginForm from "component/LoginForm";
import RaisedButton from "material-ui/RaisedButton";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import Language from "material-ui/svg-icons/action/language";
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from "material-ui/Toolbar";
import MenuItem from "material-ui/MenuItem";
import "stylus/home/home.styl";


export class AppTopBar extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoginFormOpen: false }
  }

  componentDidMount() {
    this.props.getSession();
  }

  openLoginForm() {
    this.setState({ isLoginFormOpen: true })
  }

  onCloseLoginForm() {
    this.setState({ isLoginFormOpen: false })
  }

  render() {

    const {currentLocale, setLocale} = this.props;

    const RightSection = ({currentLocale}) => {
      return (
        <div className="app-bar-buttons-group">
          <RaisedButton label={translate('home.topBar.login')} onTouchTap={() => this.openLoginForm()} primary={true}/>
          <RaisedButton label={translate('home.topBar.register')} primary={true}/>
          <LocaleSwitcher currentLocale={currentLocale} onLocaleChange={setLocale}/>
          <LoginForm isOpen={this.state.isLoginFormOpen} onClose={() => this.onCloseLoginForm()}/>
        </div>
      );
    };

    const LocaleSwitcher = ({currentLocale, onLocaleChange}) => {

      const localesItems = locales.map(lang => <MenuItem key={lang} value={lang}
                                                         primaryText={translate(`languages.${lang}`)}/>);
      return (
        <IconMenu iconButtonElement={<IconButton ><Language /></IconButton>}
                  onChange={(event, value) => onLocaleChange(value)} value={currentLocale}>
          {localesItems}
        </IconMenu>
      );
    };

    return (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text={translate('home.topBar.appTitle')}/>
        </ToolbarGroup>
        <ToolbarGroup>
          <RightSection currentLocale={currentLocale}/>
        </ToolbarGroup>
      </Toolbar>
    );
  }

}

