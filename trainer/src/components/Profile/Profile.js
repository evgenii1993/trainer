import React from 'react';
import avatar from './../../assets/avatar.png';

let Profile = (props) => {
    return (
        <div>
            <img src={props.infoUser.avatar.length !== 0 ? props.infoUser.avatar : avatar} />
            <div>{props.infoUser.status}</div>
            <div>{props.infoUser.surname}</div>
            <div>{props.infoUser.name}</div>
            <div>{props.infoUser.rang}</div>
        </div>
    )
} 

export default Profile;