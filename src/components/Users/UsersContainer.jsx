import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/users-reducer';
import Users from './Users';

let mapStateToProps = (state) => {
    debugger;
    return {
        users: state.usersPage.users,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        follow: (userId) => {
            dispatch(followAC(userId));
            },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
         }
        }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

