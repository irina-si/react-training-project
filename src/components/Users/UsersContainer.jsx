import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setPage, getUsersThunkCreator, followThunkCreator, unfollowThunkCreator } from '../../redux/users-reducer';
import { WithAuthRedirect } from '../hoc/WithAuthRedirect';
import Users from './Users';
class UsersContainer extends React.Component {   
    
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNum) => {
        this.props.setPage(pageNum);
        this.props.getUsersThunkCreator(pageNum, this.props.pageSize);
    }

    followAPI = (userId) => {
        this.props.followThunkCreator(userId);
    }

    unfollowAPI = (userId) => {
        this.props.unfollowThunkCreator(userId);
    }

    render () {
       return <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
           currentPage={this.props.currentPage} onPageChange={this.onPageChange}
           users={this.props.users} follow={this.followAPI} unfollow={this.unfollowAPI} 
           followingInProgress={this.props.followingInProgress}
       />
    }   
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default compose(
    connect(mapStateToProps, {followThunkCreator, unfollowThunkCreator, getUsersThunkCreator, setPage}),
    WithAuthRedirect, 
)(UsersContainer)
