import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settingss from './components/Settingss/Settingss';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import WeatherAPI from './components/WeatherAPI/WeatherAPI';
import ProfileContainer from './components/Profile/ProfileContainer';

function App(props) {
  return (
   <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <NavbarContainer />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={ () => <DialogsContainer /> } />
        <Route path='/profile' render={ () => <ProfileContainer />} />
        <Route path='/users' render={ () => <UsersContainer /> } />
        <Route path='/music' component={Music}/>
        <Route path='/news' component={News}/>
        <Route path='/settings' component={Settingss}/>
        <Route path='/weather' component={WeatherAPI}/>
      </div>  
    </div>
   </BrowserRouter>
  );
}


export default App;
