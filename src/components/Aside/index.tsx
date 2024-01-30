import { useEffect } from "react";
import { Link } from "react-router-dom";

export function Aside(){
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
          <a className="brand-logo darken-1" href="index.html">
            <img className="hide-on-med-and-down" src="./logo/materialize-logo-color.png" alt="materialize logo"/>
            <img className="show-on-medium-and-down hide-on-med-and-up" src="./logo/materialize-logo.png" alt="materialize logo"/>
            <span className="logo-text hide-on-med-and-down">Materialize</span>
          </a>
          <a className="navbar-toggler" href="#"><i className="material-icons">radio_button_checked</i></a></h1>
      </div>
      <ul className="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow" id="slide-out" data-menu="menu-navigation" data-collapsible="menu-accordion">
        <li className="active bold">
          <Link to={'/'} className="waves-effect waves-cyan">
            <i className="material-icons">settings_input_svideo</i>
            <span className="menu-title" data-i18n="Dashboard">Dashboard</span>
          </Link>
        </li>
        <li className="bold">
          <a className="collapsible-header waves-effect waves-cyan " href="JavaScript:void(0)">
            <i className="material-icons">person</i>
            <span className="menu-title" data-i18n="Authentication">Funcionários</span>
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
        <li className="bold">
          <a className="collapsible-header waves-effect waves-cyan " href="JavaScript:void(0)">
            <i className="material-icons">people</i>
            <span className="menu-title" data-i18n="Authentication">Pacientes</span>
            <span className="badge badge pill purple float-right mr-10">2</span>
          </a>
          <div className="collapsible-body">
            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
              <li>
                <Link to="/patients">
                  <i className="material-icons">radio_button_unchecked</i>
                  <span data-i18n="Login">Listagem</span>
                </Link>
              </li>
              <li>
                <Link to="/patients/create">
                  <i className="material-icons">radio_button_unchecked</i>
                  <span data-i18n="Login">Cadastrar</span>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="bold">
          <a className="collapsible-header waves-effect waves-cyan " href="JavaScript:void(0)">
            <i className="material-icons">access_time</i>
            <span className="menu-title" data-i18n="Authentication">Agendamentos</span>
            <span className="badge badge pill purple float-right mr-10">2</span>
          </a>
          <div className="collapsible-body">
            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
              <li>
                <Link to="schedules">
                  <i className="material-icons">radio_button_unchecked</i>
                  <span data-i18n="Login">Listagem</span>
                </Link>
              </li>
              <li>
                <Link to="schedules/create">
                  <i className="material-icons">radio_button_unchecked</i>
                  <span data-i18n="Login">Cadastrar</span>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="bold">
          <Link to="/calendary">
            <i className="material-icons">today</i><span className="menu-title" data-i18n="Calendar">Calendário</span>
          </Link>
        </li>
        <li className="bold">
          <Link to="/users" className="waves-effect waves-cyan">
            <i className="material-icons">face</i><span className="menu-title" data-i18n="User">Usuários</span>
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