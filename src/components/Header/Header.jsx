import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
        <img src="https://www.humanrightslogo.net/ru/system/files/styles/gallery-full/private/unconfirmed_uploads/equality%20logo.png?itok=dZ9Iv4Uv" alt="logo"></img>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={'/login'}>Log In</NavLink>}
        </div>
    </header>
}

export default Header;