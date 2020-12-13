import { connect } from 'react-redux';
import { sendMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    let dialogsPage = state.dialogsPage;
    return {
        dialogsData: dialogsPage.dialogsData,
        messagesData: dialogsPage.messagesData,
        newMessageText: dialogsPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        editMessage: (text) => {
            dispatch(updateMessageTextActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;