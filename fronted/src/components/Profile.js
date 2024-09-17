<<<<<<< HEAD
import React from 'react';
import { IoMdArrowBack } from "react-icons/io";
import { Link, useParams } from 'react-router-dom';
import Avatar from "react-avatar";
import { useSelector,useDispatch } from "react-redux";
import useGetProfile from '../hooks/useGetProfile';
import axios from "axios";
import { USER_API_END_POINT } from '../utils/constant';
import toast from "react-hot-toast"
import { followingUpdate } from '../redux/userSlice';
import { getRefresh } from '../redux/tweetSlice';

const Profile = () => {
    const { user, profile } = useSelector(store => store.user);
    const { id } = useParams();
    useGetProfile(id);
    const dispatch = useDispatch();

    const followAndUnfollowHandler = async () => {
        if(user.following.includes(id)){
            // unfollow
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.post(`${USER_API_END_POINT}/unfollow/${id}`, {id:user?._id});
                console.log(res);
                dispatch(followingUpdate(id));
                dispatch(getRefresh());
                toast.success(res.data.message);
            } catch (error) {
                toast.error(error.response.data.message);
                console.log(error);
            }
            
        }else{
            // follow
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.post(`${USER_API_END_POINT}/follow/${id}`, {id:user?._id});
                console.log(res);
                dispatch(followingUpdate(id));
                dispatch(getRefresh());
                toast.success(res.data.message);
            } catch (error) {
                toast.error(error.response.data.message);
                console.log(error);
            }
        }
    }

    return (
        <div className='w-[50%] border-l border-r border-gray-200'>
            <div>
                <div className='flex items-center py-2'>
                    <Link to="/" className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
                        <IoMdArrowBack size="24px" />
                    </Link>
                    <div className='ml-2'>
                        <h1 className='font-bold text-lg'>{profile?.name}</h1>
                        <p className='text-gray-500 text-sm'>10 post</p>
                    </div>
                </div>
                <img src="https://pbs.twimg.com/profile_banners/1501755294745260034/1720419570/1500x500" alt="banner" />
                <div className='absolute top-52 ml-2 border-4 border-white rounded-full'>
                    <Avatar src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" size="120" round={true} />
                </div>
                <div className='text-right m-4'>
                    {
                        profile?._id === user?._id ? (
                            <button className='px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400'>Edit Profile</button>

                        ) : (
                            <button onClick={followAndUnfollowHandler} className='px-4 py-1 bg-black text-white rounded-full'>{user.following.includes(id) ? "Following" : "Follow"}</button>
                        )
                    }
                </div>
                <div className='m-4'>
                    <h1 className='font-bold text-xl'>{profile?.name}</h1>
                    <p>{`@${profile?.username}`}</p>
                </div>
                <div className='m-4 text-sm'>
                    <p>🌐 Exploring the web's endless possibilities with MERN Stack 🚀 | Problem solver by day, coder by night 🌙 | Coffee lover ☕ | Join me on this coding journey!</p>
                </div>
            </div>
        </div>
    )
}

export default Profile
=======
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
>>>>>>> 66a8da562c72f88f0001ca243fee372784c35896
