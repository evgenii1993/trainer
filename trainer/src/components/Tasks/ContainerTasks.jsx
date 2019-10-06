import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tasks from './Tasks';
import { getTasksList } from '../../redux/selects/selectorTasks';
import TasksAddForm from "./TasksAddForm/TasksAddForm";

class ContainerTasks extends Component {
    render () {
        return <>
            <Tasks {...this.props}/>
            <TasksAddForm />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        tasksList :getTasksList(state)
    }
}

export default connect(mapStateToProps, {})(ContainerTasks);