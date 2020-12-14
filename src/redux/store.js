import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _rerenderEntireTree() { 
        console.log('State changed');
    },
    _state: {
        profilePage: {
            postsData: [ {id: 1, message: "Hi!", likesCount: 25},
                     {id: 2, message: "It is my first post!", likesCount: 3},
                 ],
            newPostText: '',
            },
        dialogsPage: {
            dialogsData: [{id: 1, name: "Дима"},
                      {id: 2, name: "Света"},
                      {id: 3, name: "Андрей"},
                      {id: 4, name: "Стёпа"},
                      {id: 5, name: "Владик"}
                    ],
            messagesData: [{id: 1, message: "Hi!"},
                        {id: 2, message: "How are you?"},
                        {id: 3, message: "I love you!"},
                        {id: 4, message: "I bougth tickets to Spain!"},
                        {id: 5, message: "You are beautiful"},
                        {id: 6, message: "Let's go out?"},
                    ],
            newMessageText: "",
        },
    
        sidebar: {
            sidebarItems: ["Profile",
                            "Dialogs",
                            "News",
                            "Music",
                            "Settings",
                            "Weather"],
            friends: ["Cвета", "Андрей", "Степа", "Илья", "Маша"],
         }
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        
        this._rerenderEntireTree();
    }  
}

export default store;
window.store = store;
