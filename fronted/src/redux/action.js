import axios from 'axios';
import { GET_USER , GET_OTHER_USERS , GET_MY_PROFILE } from './actionTypes';
import { USER_API_END_POINT } from '../utils/constant';

export const fetchUserProfile = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/profile/${id}`, {
        withCredentials: true
    });
      dispatch({
        type: GET_USER,
        payload: res.data.user,
      });
      dispatch({
        type: GET_MY_PROFILE,
        payload: res.data.user,
      });
      dispatch({
        type: GET_OTHER_USERS,
        payload: res.data.otherUsers,
      });
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };
};
