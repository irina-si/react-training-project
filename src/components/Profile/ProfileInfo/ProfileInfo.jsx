import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return <div> 
            <img src="https://s1.1zoom.ru/big0/393/419611-Kycb.jpg" alt="pic"></img>
          <div className={s.descriptionBlock}>
            ava+description
        </div>
      </div>
}

export default ProfileInfo;