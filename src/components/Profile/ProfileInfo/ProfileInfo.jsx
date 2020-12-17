import React from 'react';
import s from './ProfileInfo.module.css';
import photo from '../../../assets/images/profile-info.jpg'

const ProfileInfo = (props) => {
  if (!!props.profile) {
    return <div> 
            <img src={photo} alt="pic" height="300px" />
            <div className={s.descriptionBlock}>
              <img src={props.profile.photos.large} alt="userPhoto" />
              description
            </div>
      </div>
  } else {
    return <div></div>
  }
  
}

export default ProfileInfo;