import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  debugger;
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.sitebar} />

        <div className='app-wrapper-content'>
          
          <Route path='/dialogs' render={() => <Dialogs 
          dialogPage={props.state.dialogsPage}
          dispatch={props.dispatch}/>} />
          
          <Route path='/profile' render={() => <Profile
            profilePage={props.state.profilePage}
            dispatch={props.dispatch} />} />
          
          <Route path='/news' render={() => <News />} />
          
          <Route path='/music' render={() => <Music />} />
          
          <Route path='/settings' render={() => <Settings />} />
          
        </div>

      </div>
    </BrowserRouter>

  );
}

export default App;
