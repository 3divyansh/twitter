<<<<<<< HEAD
import React from 'react'
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import { Link } from 'react-router-dom';

const RightSidebar = ({ otherUsers }) => {

  return (
    <div className='w-[25%]'>
      <div className='flex items-center p-2 bg-gray-100 rounded-full outline-none w-full'>
        <CiSearch size="20px" />
        <input type="text" className='bg-transparent outline-none px-2' placeholder='Search' />
      </div>
      <div className='p-4 bg-gray-100 rounded-2xl my-4'>
        <h1 className='font-bold text-lg'>Who to follow</h1>
        {
          otherUsers?.map((user) => {
            return (
              <div key={user?._id} className='flex items-center justify-between my-3'>
                <div className='flex'>
                  <div>
                    <Avatar src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" size="40" round={true} />
                  </div>
                  <div className='ml-2'>
                    <h1 className='font-bold'>{user?.name}</h1>
                    <p className='text-sm'>{`@${user?.username}`}</p>
                  </div>
                </div>
                <div>
                  <Link to={`/profile/${user?._id}`}>
                    <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
                  </Link>
                </div>
              </div>
            )
          })
        }



      </div>
    </div>
  )
}

export default RightSidebar
=======
import React, { useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import Avatar from 'react-avatar';
import useOtherUser from '../hooks/useOtherUser';
import { Link, useParams } from 'react-router-dom';

const RightSidebar = () => {
  const { id } = useParams(); 
  const { otherUsers } = useOtherUser(id);

  useEffect(() => {
    console.log('Other Users:', otherUsers);
  }, [otherUsers]);

  return (
    <div className='w-[20%]'>
      <div className='p-2 flex items-center bg-gray-100 rounded-full outline-none w-full'>
        <CiSearch size="20px" />
        <input type='text' className='bg-transparent outline-none px-2' placeholder='search'/>
      </div>
      <div className='p-4 bg-gray-100 rounded-2xl my-4'>
        <h1 className='font-bold text-lg'>Who to follow</h1>
        {otherUsers && otherUsers.length > 0 ? (
          otherUsers.map((user, index) => (
            <div key={index} className='flex items-center justify-between my-2'>
              <div className='flex'>
                <Avatar src={user.avatarUrl } size="36" round={true} />
                <Link  to={`/profile/${user?._id}`} className='ml-2'>
                <div className='ml-2'>
                 <h1 className='font-bold'>{user.name}</h1>
                  <p className='text-sm'>@{user.username}</p>
                </div>
                </Link>
               
              </div>
              <button className='px-2 py-1 bg-black text-white rounded-full'>Follow</button>
            </div>
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
}

export default RightSidebar;
>>>>>>> 66a8da562c72f88f0001ca243fee372784c35896
