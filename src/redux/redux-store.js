import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import weatherReducer from "./weather-reducer"

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    weatherPage: weatherReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;