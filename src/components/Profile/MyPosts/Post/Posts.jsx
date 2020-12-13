import React from 'react';
import s from './Posts.module.css';

const Post = (props) => {
    return (
      <div className={`${s.item} ${s.active}`}>
      <img src='https://vokrug-tv.ru/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg' alt='post'/>
      {props.message}
      <div>
      <span>like {props.like}</span>
      </div>
      </div>
 )
}

export default Post;