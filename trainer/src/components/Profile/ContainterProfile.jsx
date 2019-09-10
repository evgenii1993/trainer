import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getInfoUser } from '../../redux/selects/selectorUser';

class ContainerProfile extends Component {
    render() {
        return <Profile infoUser={this.props.infoUser}/>
    }
}

let mapStateToProps = (state) => {
    return {
        infoUser: getInfoUser(state)
    }
}

export default connect(mapStateToProps, {})(ContainerProfile);