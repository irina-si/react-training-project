import React from 'react';
import s from './ProfileInfo.module.css';
import photo from '../../../assets/images/profile-info.jpg'

const ProfileInfo = (props) => {
  return <div> 
            <img src={photo} alt="pic"></img>
          <div className={s.descriptionBlock}>
            ava+description
        </div>
      </div>
}

export default ProfileInfo;