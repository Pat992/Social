import React from 'react'

import classes from './Navbar.module.css';
import colors from '../../../colors.module.css';
import Usergroup from '../Icons/Usergroup';
import Messages from '../Icons/Messages';
import Logout from '../Icons/Logout';

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className={classes.Navbar}>
                <div className={[classes.Navpart, colors.MainColor].join(' ')}></div>
                <button className={[classes.NavBtn, colors.SecondaryColor].join(' ')}></button>
                <ul className={[classes.Navpart, classes.Navitems, colors.MainColor].join(' ')}>
                    <li><Usergroup /></li>
                    <li><Messages /></li>
                    <li><Logout /></li>
                </ul>
            </nav>
            <div className={classes.Blur}></div>
        </React.Fragment>
    )
}

export default Navbar
