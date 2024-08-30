import React from 'react';
import { useEffect } from 'react';
import Avatar from 'react-avatar';
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import useGetProfile from '../hooks/useGetProfile';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserProfile } from '../redux/action';


const Profile = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.user);
  const { user } = useGetProfile(userId);

 

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserProfile(userId));
    }
  }, [userId, dispatch]);
  

  if (!userId) return <div>Loading...</div>;

  return (
    <div className='w-[50%] border-l border-r border-gray-400'>
      <div>
        <div className='flex items-center py-2'>
          <Link to="/" className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <IoMdArrowBack size="22px"/>
          </Link>
          <div className='ml-2'>
            <h1 className='font-bold text-lg'>{userId.username}</h1>
            <p className='text-gray-500 text-sm'>10 Post</p>
          </div>
        </div>
        <img src='https://pbs.twimg.com/profile_banners/1501755294745260034/1720419570/1500x500' alt='banner'/>
        <div className='absolute top-56 ml-2 border-4 border-white rounded-full'>
          <Avatar src={user?.avatarUrl || "defaultAvatarUrl"} size="80" round={true} />
        </div>
        <div className='text-right m-4'>
          <button className='px-4 py-1 hover:bg-gray-200 rounded-full text-right border border-gray-400'>Edit profile</button>
        </div>
        <div className='m-4'>
          <h1 className='font-bold text-xl'>{userId.name}</h1>
          <p>{`@${userId.username}`}</p>
        </div>
        <div className='m-4 text-sm'>
          <p>
            Unlucky man___I love my India_#___
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile;
