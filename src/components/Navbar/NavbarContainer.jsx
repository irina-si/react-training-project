import { connect } from 'react-redux';
import Navbar from './Navbar';

let mapStateToProps = (state) => {
  let sidebarPage = state.sidebar;
  return {
      sidebarItems: sidebarPage.sidebarItems,
      friends: sidebarPage.friends,
  }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;

