import React from 'react';
import s from './Progress.module.scss';

const Progress = (props) => {
    return (
        <div className={s.progress}>
            <progress max="100" value="30"></progress>
            <div className={s.progressValue}></div>
            <div className={s.progressBg}>
                <div className={s.progressBar}></div>
            </div>
        </div>  
    );
}

export default Progress;