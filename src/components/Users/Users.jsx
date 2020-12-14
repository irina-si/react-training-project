import React from 'react';
import userPhoto from '../../assets/images/avatar.jpg';
import s from './users.module.css';
// import User from './User/User';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
    <div className={s.selectPageMenu}>
       {pages.map( (num) => {
           return <span className={props.currentPage === num ? s.selectedPage : ''}
                  onClick={() => props.onPageChange(num)}>
                  {num}   
           </span>}) 
           }
    </div>
   { 
     props.users.map((u) => {
      return <div key={u.id}>
          <span>
              <div>
                  <img src={u.photos.small !=null ? u.photos.small : userPhoto} alt="photog"  width="140" height="140"/>
              </div>
          </span>
              <div>
                  { u.followed ? <button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button>  : 
                                 <button onClick={ () => {props.follow(u.id)}}>Follow</button>} 
              </div>
          <span>
              <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
              </span>
              { <span>
                  <div>{'Minsk'}</div>
                  <div>{'Belarus'}</div>
              </span> }
          </span>
      </div>
   }  
  )
}
</div>
}

export default Users;