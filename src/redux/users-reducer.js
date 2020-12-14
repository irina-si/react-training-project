const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
        users: [],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        }

const usersReducer = (state = initialState, action) => {
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
                users: [...action.users],
            };
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.pageNum,
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count, 
            };
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

export const setPageAC = (pageNum) => {
    return {
        type: SET_PAGE,
        pageNum,
    }
}

export const setTotalUsersCountAC = (count) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count,
    }
}