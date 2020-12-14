let initialState = {
        sidebarItems: ["Profile",
                        "Dialogs",
                        "Users",
                        "News",
                        "Music",
                        "Settings",
                        "Weather"],
        friends: ["Cвета", "Андрей", "Степа", "Илья", "Маша"],
}

const sidebarReducer = (state = initialState, action) => {
    return state;
};

export default sidebarReducer;

