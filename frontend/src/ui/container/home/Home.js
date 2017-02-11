import React, {Component} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {getSession} from "reducers/authentication";
import {setLocale} from "reducers/locale";
import {locales} from "config/translation";
import {AppTopBar} from "component/AppTopBar";
import {cyan500} from "material-ui/styles/colors";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import "stylus/main.styl";


const muiTheme = getMuiTheme({
    appBar: {
      height: 64,
    }
});

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
    console.log(getMuiTheme());
    const {currentLocale, setLocale} = this.props;

    const menuItems = [
      {label: 'Home', link: '/'},
      this.props.isAuthenticated ? {label: 'Logout', link: '/logout'} : {label: 'Login', link: '/login'},
      {label: 'Private page', link: '/private'}
    ];

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppTopBar getSession={getSession} currentLocale={currentLocale} setLocale={setLocale}/>
          <TopMenu items={menuItems}/>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
};

export default connect(
  state => ({isAuthenticated: state.authentication.isAuthenticated, currentLocale: state.locale.currentLocale}),
  {getSession, setLocale}
)(Home);
