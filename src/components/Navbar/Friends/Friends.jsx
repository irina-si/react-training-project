import React from 'react';
import s from './Friends.module.css';

const Friends = (props) => {

  let friendsElements = props.friendsList.map( (friend) => {
    return <div className={s.friendInfo}>
              <img src="https://vokrug-tv.ru/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg" 
              alt="avatarka"/>
              <span className={s.name}>{friend}</span>
            </div>
        })

  return (
      <div className={s.friends}>
        <h3>Friends</h3>
        <div className={s.friendsList}>
          {friendsElements}
        </div>
      </div>
  )
}

export default Friends;