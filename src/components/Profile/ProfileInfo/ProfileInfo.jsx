import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus'
import userPhoto from './../../../assets/images/avatar.jpg';

const ProfileInfo = (props) => {
  if (!!props.profile) {
    return <div> 
            <div className={s.descriptionBlock}>
              <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} 
              alt="userPhoto" width="180" height="190" />
              <div className={s.name}>{props.profile.fullName}</div>
              <ProfileStatus status={props.status} 
                 userId={props.profile.userId} updateStatus={props.updateStatus}/>
            </div>
      </div>
  } else {
    return <div></div>
  }
  
}

export default ProfileInfo;