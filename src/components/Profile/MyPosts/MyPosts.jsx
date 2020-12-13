import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Posts'

const MyPosts = (props) => {
    let postsElements = props.postsData
                            .map( (post) => <Post message={post.message} likeCount={post.likesCount} />)
    
    
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    }

    let updateNewPostText = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
     <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement} onChange={updateNewPostText} value={props.newPostText}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            
        </div>
    <div className={s.posts}>
       {postsElements}                        
    </div>
  </div>
 )
}

export default MyPosts;