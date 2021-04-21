import { userAPI } from "../api/api";

const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
        users: [],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        followingInProgress: []
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
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching 
                                    ? [...state.followingInProgress, action.userId]
                                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default: return state;
        }   
    
}

export default usersReducer;

export const followSuccess = (userId) => ({type: FOLLOW, userId}) 
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setPage = (pageNum) => ({type: SET_PAGE, pageNum})
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count})
export const toggleFollowingProgress = (userId, isFetching) => ({type: TOGGLE_FOLLOWING_PROGRESS, userId, isFetching})

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        userAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            })  
         }
}  

export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(userId, true));
        userAPI.followUser(userId)
            .then( response => {
                if (response.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleFollowingProgress(userId, false)); 
        }) 
         }
}

export const unfollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(userId, true));
        userAPI.unfollowUser(userId)
            .then( response => {
                if (response.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleFollowingProgress(userId, false)); 
        }) 
         }
}