import Axios from 'axios';
import React from 'react';
import userPhoto from '../../assets/images/avatar.jpg'
// import User from './User/User';

class Users extends React.Component {
    constructor(props) {
        super(props);
        alert("new");
        Axios.get("https://social-network.samuraijs.com/api/1.0/users/").then( response => {
            this.props.setUsers(response.data.items);
        })   
      }    

    render () {
       return <div>
             { 
               this.props.users.map( (u) => {
                return <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !=null ? u.photos.small : userPhoto} alt="photog"  width="140" height="140"/>
                        </div>
                    </span>
                        <div>
                            { u.followed ? <button onClick={ () => {this.props.unfollow(u.id)}}>Unfollow</button>  : 
                                           <button onClick={ () => {this.props.follow(u.id)}}>Follow</button>} 
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
}


export default Users;