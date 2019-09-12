import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import s from './Profile.module.css';
import Ava from './../../assets/avatar.png';
import Button from '@material-ui/core/Button';
import Progress from '../common/Progress/Progress';

let Profile = (props) => {

    return (
        <div className={s.container}>
            <div className={s.avatarPanel}>
                <div className={s.avatar}>
                    <Avatar 
                        alt="Remy Sharp" 
                        className={s.bigAvatar}
                        src={props.infoUser.avatar.length !== 0 ? props.infoUser.avatar : Ava} />
                    
                </div>
                <div className={s.rang}><span>RANG:</span>{props.infoUser.rang}</div>
                <div>
                    <input 
                        accept="image/*"
                        className={s.hidden}
                        id="onload-button-avatar"
                        multiple
                        type="file"
                    />
                    <label htmlFor="onload-button-avatar">
                        <Button variant="contained" component="span">
                            Upload
                        </Button>
                    </label>
                </div>
                <Progress />
            </div>
            <div className={s.infoPanel}>
                
                <div className={s.status}>
                    <span className={s.boldTitle}>Статус: </span>{props.infoUser.status}
                </div>
                <div className={s.surname}>{props.infoUser.surname}</div>
                <div className={s.name}>{props.infoUser.name}</div>
            </div>
            
            
        </div>
    )
} 

export default Profile;