import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogs-reducer';
import { WithAuthRedirect } from '../hoc/WithAuthRedirect';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    let dialogsPage = state.dialogsPage;
    return {
        dialogsData: dialogsPage.dialogsData,
        messagesData: dialogsPage.messagesData,
        newMessageText: dialogsPage.newMessageText,
    }
}

let mapDispatchToProps   = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        editMessage: (text) => {
            dispatch(updateMessageTextActionCreator(text))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect 
)(Dialogs)