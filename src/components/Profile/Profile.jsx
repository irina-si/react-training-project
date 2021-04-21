import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return <div className={s.content}> 
                <ProfileInfo profile={props.profile} 
                updateStatus={props.updateStatusThunkCreator}
                status={props.status} />
                <MyPostsContainer />
            </div>
}

export default Profile;