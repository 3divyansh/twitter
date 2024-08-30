import React, { useEffect } from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../redux/actionTypes';
import useGetProfile from '../hooks/useGetProfile';
import useOtherUser from '../hooks/useOtherUser';

const Home = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.user); 
  const { profile } = useGetProfile();
  const { otherUsers } = useOtherUser();

  useEffect(() => {
    if (!profile && id) {
      dispatch(getUser(id)); 
    }
  }, [id, dispatch, profile]);

  return (
    <div className='flex justify-between w-[80%] mx-auto'>
      <LeftSidebar />
      <Outlet />
      <RightSidebar otherUsers={otherUsers} />
    </div>
  );
};

export default Home;
