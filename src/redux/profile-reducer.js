import { profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
        postsData: [ {id: 1, message: "Hi!", likesCount: 25},
                 {id: 2, message: "It is my first post!", likesCount: 3},
             ],
        newPostText: '',
        profile: null,
        status: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 7,
                message: state.newPostText,
            };
            return {...state, postsData: [...state.postsData, newPost], newPostText: ''};
        case UPDATE_NEW_POST_TEXT: 
            return {...state, newPostText: action.newText};
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS:
            return {...state, status: action.status};
        default: return state;
        }   
    
}

export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text,})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getUserProfileThunkCreator = (userId) => (dispatch) => {
    profileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })  
}
export const setStatus = (status) => ({type: SET_STATUS, status})
export const getStatusThunkCreator = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data));
            })  
}
export const updateStatusThunkCreator = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(status))
                }})
            .catch(() => {
                alert('Вы не можете изменить статус');
                })
        }  



