import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tasks from './Tasks';

class ContainerTasks extends Component {
    render () {
        return <Tasks {...this.props}/>
    }
}

/*let mapStateToProps = (state) => {
    return {
        infoUser: getInfoUser(state)
    }
}*/

export default connect(null, {})(ContainerTasks);