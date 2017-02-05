import React, {Component} from "react";
import {connect} from "react-redux";
import {getSession} from "reducers/authentication";
import {setLocale} from "reducers/locale";
import {locales} from "config/translation";

import RaisedButton from "material-ui/RaisedButton";
import IconButton from "material-ui/IconButton";
import IconMenu from 'material-ui/IconMenu';
import Language from "material-ui/svg-icons/action/language";
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';


export class AppTopBar extends Component {

  componentDidMount() {
    this.props.getSession();
  }

  render() {

    const {currentLocale, setLocale} = this.props;

    var RightAppBarComponent = ({currentLocale, onLocaleChange}) => {
      return (
        <div>
          <RaisedButton label={translate('home.topBar.login')} primary={true}/>
          <RaisedButton label={translate('home.topBar.register')} primary={true}/>
          <LocaleSwitcher currentLocale={currentLocale} onLocaleChange={setLocale} />
        </div>
      );
    };

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
    );
  }

}

