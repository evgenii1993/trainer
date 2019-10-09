import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tasks from './Tasks';
import { getTasksList } from '../../redux/selects/selectorTasks';
import TasksAddForm from "./TasksAddForm/TasksAddForm";
import {addTask} from "../../redux/reducers/reducer-tasks";

class ContainerTasks extends Component {
    render () {
        return <>
            <Tasks {...this.props}/>
            <TasksAddForm addTask={this.props.addTask}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        tasksList :getTasksList(state)
    }
};

export default connect(mapStateToProps, { addTask })(ContainerTasks);