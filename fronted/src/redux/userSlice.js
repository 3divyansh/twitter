<<<<<<< HEAD
import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
        otherUsers:null,
        profile:null
    },
    reducers:{
        // multiple actions
        getUser:(state,action)=>{
            state.user = action.payload;
        },
        getOtherUsers:(state,action)=>{
            state.otherUsers = action.payload;
        },
        getMyProfile:(state,action)=>{
            state.profile = action.payload;
        },
        followingUpdate:(state,action)=>{
            // unfollow
            if(state.user.following.includes(action.payload)){
                state.user.following = state.user.following.filter((itemId)=>{
                    return itemId !== action.payload;
                })
            }else{
                // follow
                state.user.following.push(action.payload);
            }
        }
    }
});
export const {getUser, getOtherUsers,getMyProfile,followingUpdate} = userSlice.actions;
export default userSlice.reducer;


=======
import { GET_USER, GET_OTHER_USERS, GET_MY_PROFILE } from './actionTypes';

const initialState = {
  user: {
    _id: null,
    name: "",
    username: "",
    user:null
  
  },
  otherUsers: [],
  profile: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case GET_OTHER_USERS:
      return {
        ...state,
        otherUsers: action.payload,
      };
    case GET_MY_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
>>>>>>> 66a8da562c72f88f0001ca243fee372784c35896
