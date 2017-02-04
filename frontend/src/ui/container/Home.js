import React, {Component} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {getSession} from "reducers/authentication";
import {setLocale} from "reducers/locale";
import {locales} from "config/translation";

import RaisedButton from "material-ui/RaisedButton";
import IconButton from "material-ui/IconButton";
import IconMenu from 'material-ui/IconMenu';
import Language from "material-ui/svg-icons/action/language";
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';

import "stylus/main.styl";

const TopMenu = (props) => {
  const items = props.items.map((item, key) => (
    <li key={key} className="pure-menu-item">
      <Link to={item.link} className="pure-menu-link">{item.label}</Link>
    </li>
  ));
  return (
    <div className="pure-menu pure-menu-horizontal">
      <ul className="pure-menu-list">
        {items}
      </ul>
    </div>
  );
};

export class Home extends Component {

  componentDidMount() {
    this.props.getSession();
  }

  render() {
    const {currentLocale, setLocale} = this.props;
    const menuItems = [
      {label: 'Home', link: '/'},
      this.props.isAuthenticated ? {label: 'Logout', link: '/logout'} : {label: 'Login', link: '/login'},
      {label: 'Private page', link: '/private'}
    ];


    var LocaleSwitcher = ({currentLocale, onLocaleChange}) => {
      const localesItems = locales.map(lang => <MenuItem key={lang} value={lang} primaryText={translate(`languages.${lang}`)}/>);
      return (
        <IconMenu iconButtonElement={<IconButton><Language/></IconButton>}
                onChange={(event, value) => onLocaleChange(value)} value={currentLocale}>
          {localesItems}
        </IconMenu>
      );
    };

    return (
      <MuiThemeProvider>
        <div>
          <Toolbar>
            <ToolbarGroup>
              <ToolbarTitle text={translate('home.topBar.appTitle')}/>
            </ToolbarGroup>
            <ToolbarGroup>
              <RaisedButton label={translate('home.topBar.login')} primary={true}/>
              <RaisedButton label={translate('home.topBar.register')} primary={true}/>
              <LocaleSwitcher currentLocale={currentLocale} onLocaleChange={setLocale} />
            </ToolbarGroup>
          </Toolbar>
          <TopMenu items={menuItems}/>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(
  state => ({isAuthenticated: state.authentication.isAuthenticated, currentLocale: state.locale.currentLocale}),
  {getSession, setLocale}
)(Home);
