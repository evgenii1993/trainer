import React from 'react';
import {connect} from "react-redux";
import s from './Header.module.css';
import {toggleNavVisible} from './../../redux/reducers/reducer-nav';
import Navigator from "./../Navigator/Navigator";

let Header = (props) => {
    
    return (
        <div className={`${s.header}`}>
            <button onClick={props.toggleNavVisible}>{props.isVisible ? "show" : "hidden"}</button>
            <Navigator isVisible={props.isVisible} />
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        isVisible: state.nav.isVisible
    }
}
export default connect(mapStateToProps, { toggleNavVisible })(Header);