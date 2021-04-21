import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settingss from './components/Settingss/Settingss';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import WeatherAPI from './components/WeatherAPI/WeatherAPI';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

function App(props) {
  return (
   <BrowserRouter>
    <div className='app-wrapper'>
      <HeaderContainer />
      <NavbarContainer />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={ () => <DialogsContainer /> } />
        <Route path='/profile/:userId?' render={ () => <ProfileContainer />} />
        <Route path='/users' render={ () => <UsersContainer /> } />
        <Route path='/music' component={Music}/>
        <Route path='/news' component={News}/>
        <Route path='/settings' component={Settingss}/>
        <Route path='/weather' component={WeatherAPI}/>
        <Route path='/login' component={Login} />
      </div>  
    </div>
   </BrowserRouter>
  );
}


export default App;
