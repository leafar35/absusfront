import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { isShowLinkTo } from "../../utils/isShow.Link.to";

export function Aside(){
  const context = useContext(AuthContext)
  useEffect(() => {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});
    var collapsi = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsi, {})
  },[])
  return (
    <aside className="sidenav-main nav-expanded nav-lock nav-collapsible sidenav-light sidenav-active-square">
      <div className="brand-sidebar">
        <h1 className="logo-wrapper">
          <Link to={'/'} className="brand-logo darken-1">
            <img style={{'height': '18px'}} className="hide-on-med-and-down" src="./logo.png" alt="materialize logo"/>
            <img className="show-on-medium-and-down hide-on-med-and-up" src="./logo.png" alt="materialize logo"/>
            <span style={{fontSize: '1.4rem'}} className="logo-text hide-on-med-and-down">Agendamentos</span>
          </Link>
          {/* <a className="navbar-toggler" href="#">
            <i className="material-icons">radio_button_checked</i>
          </a> */}
        </h1>
      </div>
      <ul className="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow" id="slide-out" data-menu="menu-navigation" data-collapsible="menu-accordion">
        <li className="active bold">
          <Link to={'/'} className="waves-effect waves-cyan">
            <i className="material-icons">settings_input_svideo</i>
            <span className="menu-title" data-i18n="Dashboard">Dashboard</span>
          </Link>
        </li>
        {isShowLinkTo(context?.profile?.profile, context?.profile?.rules, 'employee') && (
          <li className="bold">
            <a className="collapsible-header waves-effect waves-cyan " href="JavaScript:void(0)">
              <i className="material-icons">person</i>
              <span className="menu-title" data-i18n="employee">Funcionários</span>
              <span className="badge badge pill purple float-right mr-10">2</span>
            </a>
            <div className="collapsible-body">
              <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                <li>
                  <Link to="/employees">
                    <i className="material-icons">radio_button_unchecked</i>
                    <span data-i18n="Login">Listagem</span>
                  </Link>
                </li>
                <li>
                  <Link to="/employees/create">
                    <i className="material-icons">radio_button_unchecked</i>
                    <span data-i18n="Login">Cadastrar</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        )}
        {isShowLinkTo(context?.profile?.profile, context?.profile?.rules, 'people') && (
          <li className="bold">
            <a className="collapsible-header waves-effect waves-cyan " href="JavaScript:void(0)">
              <i className="material-icons">people</i>
              <span className="menu-title" data-i18n="patients">Pacientes</span>
              <span className="badge badge pill purple float-right mr-10">2</span>
            </a>
            <div className="collapsible-body">
              <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                <li>
                  <Link to="/patients">
                    <i className="material-icons">radio_button_unchecked</i>
                    <span data-i18n="patients:list">Listagem</span>
                  </Link>
                </li>
                <li>
                  <Link to="/patients/create">
                    <i className="material-icons">radio_button_unchecked</i>
                    <span data-i18n="patients:create">Cadastrar</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        )}
        {isShowLinkTo(context?.profile?.profile, context?.profile?.rules, 'schedule') && (
          <li className="bold">
            <a className="collapsible-header waves-effect waves-cyan " href="JavaScript:void(0)">
              <i className="material-icons">access_time</i>
              <span className="menu-title" data-i18n="schedules">Agendamentos</span>
              <span className="badge badge pill purple float-right mr-10">2</span>
            </a>
            <div className="collapsible-body">
              <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                <li>
                  <Link to="schedules">
                    <i className="material-icons">radio_button_unchecked</i>
                    <span data-i18n="schedules:list">Listagem</span>
                  </Link>
                </li>
                <li>
                  <Link to="schedules/create">
                    <i className="material-icons">radio_button_unchecked</i>
                    <span data-i18n="schedules:create">Cadastrar</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        )}        
        <li className="bold">
          <Link to="/calendary">
            <i className="material-icons">today</i><span className="menu-title" data-i18n="Calendar">Calendário</span>
          </Link>
        </li>
      </ul>
      <div className="navigation-background"></div>
      <a className="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only" href="JavaScript:void(0)" data-target="slide-out">
        <i className="material-icons">menu</i>
      </a>
    </aside>
  );
}
