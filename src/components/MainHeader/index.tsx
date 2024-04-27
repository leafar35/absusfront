import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { DivSearchTop } from "./styles";

export function MainHeader(){
    const { sigOuth } = useContext(AuthContext)
    useEffect(() => {
        var elems = document.querySelectorAll('.profile-button, .notification-button');
        M.Dropdown.init(elems, {
            inDuration: 300,
            outDuration: 300,
            constrainWidth: false,
            hover: false,
            coverTrigger: false,
            alignment: 'right',
            closeOnClick: false
        })
    },[])

    const logout = (e: any) => {
        e.preventDefault();
        Swal.fire('Deseja mesmo sair?', '', 'question').then((value) => {
            if(value.isConfirmed){
                return sigOuth()
            }
        })
    }

    return (
        <header className="page-topbar" id="header">
            <div className="navbar navbar-fixed">
                <nav className="navbar-main navbar-color nav-collapsible sideNav-lock navbar-dark gradient-45deg-indigo-blue no-shadow">
                    <div className="nav-wrapper">
                        <DivSearchTop className="header-search-wrapper hide-on-med-and-down">
                            <i className="material-icons">search</i>
                            <input className="header-search-input z-depth-2" type="text" name="Search" placeholder="Buscar no sistema" data-search="template-list" />
                            <ul className="search-list collection display-none"></ul>
                        </DivSearchTop>
                        <ul className="navbar-list right">
                            <li className="hide-on-large-only search-input-wrapper">
                                <a className="waves-effect waves-block waves-light search-button" href="javascript:void(0);">
                                    <i className="material-icons">search</i>
                                </a>
                            </li>
                            <li>
                                <a className="waves-effect waves-block waves-light notification-button" href="javascript:void(0);" data-target="notifications-dropdown">
                                    <i className="material-icons">notifications_none<small className="notification-badge">1</small></i>
                                </a>
                            </li>
                            <li>
                                <a className="waves-effect waves-block waves-light profile-button" href="javascript:void(0);" data-target="profile-dropdown">
                                    <span className="avatar-status avatar-online">
                                        <img src="./avatar/avatar-7.png" alt="avatar" /><i></i>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a className="waves-effect waves-block waves-light sidenav-trigger" href="#" data-target="slide-out-right">
                                    <i className="material-icons">format_indent_increase</i>
                                </a>
                            </li>
                        </ul>
                        <ul className="dropdown-content" id="notifications-dropdown">
                            <li>
                                <h6>NOTIFICATIONS<span className="new badge">1</span></h6>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a className="black-text" href="#!">
                                    <span className="material-icons icon-bg-circle cyan small">add_shopping_cart</span> A new order has been placed!
                                </a>
                                <time className="media-meta grey-text darken-2" dateTime="2015-06-12T20:50:48+08:00">2 hours ago</time>
                            </li>
                        </ul>
                        <ul className="dropdown-content" id="profile-dropdown">
                            <li>
                                <Link to="profile" className="grey-text text-darken-1">
                                    <i className="material-icons">person_outline</i> Perfil
                                </Link>
                            </li>
                            <li>
                                <a className="grey-text text-darken-1" href="page-faq.html">
                                    <i className="material-icons">help_outline</i> Ajuda
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a onClick={logout} className="grey-text text-darken-1" href="#">
                                    <i className="material-icons">keyboard_tab</i> Sair
                                </a>
                            </li>
                        </ul>
                    </div>
                    <nav className="display-none search-sm">
                        <div className="nav-wrapper">
                        <form id="navbarForm">
                            <div className="input-field search-input-sm">
                                <input className="search-box-sm mb-0" type="search" id="search" placeholder="Explore Materialize" data-search="template-list" />
                                <label className="label-icon" htmlFor="search"><i className="material-icons search-sm-icon">search</i></label><i className="material-icons search-sm-close">close</i>
                                <ul className="search-list collection search-list-sm display-none"></ul>
                            </div>
                        </form>
                        </div>
                    </nav>
                </nav>
            </div>
        </header>
    );
}