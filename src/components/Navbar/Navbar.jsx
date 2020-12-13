import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import s from './Navbar.module.css';

const Navbar = (props) => {

  let sidebarElements = props.sidebarItems.map ((item) => {
      return <div className={s.item}>
                <NavLink to={`/${item.toLowerCase()}`} activeClassName={s.active}>{item}</NavLink>
            </div>
    })
  
  return <nav className={s.nav}>
      {sidebarElements}
      <Friends friendsList={props.friends} />
  </nav>
}

export default Navbar;