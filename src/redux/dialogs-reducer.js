const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

let initialState = {
    dialogsData: [
              {id: 1, name: "Дима"},
              {id: 2, name: "Света"},
              {id: 3, name: "Андрей"},
              {id: 4, name: "Стёпа"},
              {id: 5, name: "Владик"}
            ],
    messagesData: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "I love you!"},
                {id: 4, message: "I bougth tickets to Spain!"},
                {id: 5, message: "You are beautiful"},
                {id: 6, message: "Let's go out?"},
            ],
    newMessageText: "",
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 3,
                message: state.newMessageText,
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: '',
                };
        case UPDATE_MESSAGE_TEXT: {
            return {
                    ...state,
                    newMessageText: action.newText,
            };
        }
        default: return state;
           } 
}

export default dialogsReducer

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}

export const updateMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        newText: text,
    }
}