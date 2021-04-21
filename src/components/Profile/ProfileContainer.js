import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfileThunkCreator, getStatusThunkCreator, setStatus, updateStatusThunkCreator } from './../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 13417;
        }
        this.props.getUserProfileThunkCreator(userId);
        this.props.getStatusThunkCreator(userId);
      }
    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {getUserProfileThunkCreator, getStatusThunkCreator, setStatus, updateStatusThunkCreator}),
    withRouter,
)(ProfileContainer)
