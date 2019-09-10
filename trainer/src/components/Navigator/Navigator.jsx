import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Navigator.module.css";

class Navigator extends Component {
    render() {
        return (
            <div className={`${this.props.isVisible ? `${s.visible}` : `${s.hidden}`}`}>
                Navigator
                <NavLink to='/Profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
        );
    }
}

export default Navigator;