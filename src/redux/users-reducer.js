const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
        users: [],
        }

const usersReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case UNFOLLOW:
            return {...state,
                     users: state.users.map( user => {
                        if (user.id === action.userId) {
                            return {
                                    ...user,
                                    followed: false,
                                    }
                                }
                                return user;
                            }),
                        };   
        case FOLLOW: 
            return {...state,
                 users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: true,
                        }
                    }
                    return user;
                }),
            };   
        case SET_USERS:
            return {
                ...state, 
                users: [...state.users, ...action.users],
            }
        default: return state;
        }   
    
}

export default usersReducer;

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users,
    }
}