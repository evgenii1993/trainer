import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import s from './App.module.css';
import Header from './components/Header/Header.jsx';
import ContainerProfile from './components/Profile/ContainterProfile';
import { getIsVisibleNavState } from './redux/selects/selectorCommon';
import ContainerTasks from './components/Tasks/ContainerTasks';


class App extends Component {
  render () {
    return (
      <div className={s.generalWrap}>
        <Header />
        <div className={`${s.content} ${this.props.isVisibleNav ? s.shortScreen : s.fullScreen}`}>
          <Route exact path="/profile" component={ContainerProfile}/>
          <Route path="/tasks" component={ContainerTasks}/>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isVisibleNav: getIsVisibleNavState(state)
  }
}

export default connect(mapStateToProps, {})(App);
