import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import style from './App.module.css';
import Header from './components/Header/Header.jsx';
import ContainerProfile from './components/Profile/ContainterProfile';

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <div className={style.content}>
          <Route exact path="/profile" component={ContainerProfile}/>
        </div>
      </div>
    );
  }
}

export default App;
