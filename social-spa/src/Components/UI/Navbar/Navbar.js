import React from 'react'
import alertify from 'alertifyjs';
import axios from 'axios';

import classes from './Navbar.module.css';
import colors from '../../../colors.module.css';
import Usergroup from '../Icons/Usergroup';
import Messages from '../Icons/Messages';
import Logout from '../Icons/Logout';
import baseUrl from '../../../_helper/baseUrl';

const Navbar = (props) => {

    const logout = () => {
        alertify.confirm("Logout?",
            function () {
                axios.post(`${baseUrl}?nav=logout`).then(res => {
                    alertify.error("Error logging-out");
                }).catch(err => {
                    props.updatePage();
                    alertify.success("Logged out");
                })
            },
            function () {
            }).setHeader('<h2>Social</h2>');
    }
    return (
        <React.Fragment>
            <nav className={classes.Navbar}>
                <div className={[classes.Navpart, colors.MainColor].join(' ')}></div>
                <button className={[classes.NavBtn, colors.SecondaryColor].join(' ')}></button>
                <ul className={[classes.Navpart, classes.Navitems, colors.MainColor].join(' ')}>
                    <li><Usergroup /></li>
                    <li><Messages openMessages={props.openMessages} /></li>
                    <li><Logout logout={logout} /></li>
                </ul>
            </nav>
            <div className={classes.Blur}></div>
        </React.Fragment>
    )
}

export default Navbar
