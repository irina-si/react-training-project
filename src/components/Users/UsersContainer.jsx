import { connect } from 'react-redux';
import { followAC, setPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from '../../redux/users-reducer';
import Axios from 'axios';
import React from 'react';
import Users from './Users';

class UsersContainer extends React.Component {   
    constructor(props){
        super(props);
        console.log(this.props);
    }
    componentDidMount() {
        Axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })  
    }

    onPageChange = (pageNum) => {
        this.props.setPage(pageNum);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`).then( response => {
            this.props.setUsers(response.data.items);
        }) 
    }

    render () {
       return <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
           currentPage={this.props.currentPage} onPageChange={this.onPageChange}
           users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}
       />
    }   
}

let mapStateToProps = (state) => {
    debugger;
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
            dispatch(setUsersAC(users)); 
         },
        setPage: (pageNum) => {
            dispatch(setPageAC(pageNum));
            },
        setTotalUsersCount: (count) => {
            dispatch(setTotalUsersCountAC(count));
            }
        }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);


