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
