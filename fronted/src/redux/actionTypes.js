
export const GET_USER = 'GET_USER';
export const GET_OTHER_USERS = 'GET_OTHER_USERS';
export const GET_MY_PROFILE = 'GET_MY_PROFILE';





export const getUser = (user) => ({
  type: GET_USER,
  payload: user,
});

export const getOtherUsers = (users) => ({
  type: GET_OTHER_USERS,
  payload: users,
});

export const getMyProfile = (profile) => ({
  type: GET_MY_PROFILE,
  payload: profile,
});
