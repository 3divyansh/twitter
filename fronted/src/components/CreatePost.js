<<<<<<< HEAD
import React, { useState } from 'react';
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";
import axios from "axios";
import { TWEET_API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast"
import { useSelector, useDispatch } from "react-redux";
import { getAllTweets, getIsActive, getRefresh } from '../redux/tweetSlice';

const CreatePost = () => {
    const [description, setDescription] = useState("");
    const { user } = useSelector(store => store.user);
    const {isActive} = useSelector(store=>store.tweet);
    const dispatch = useDispatch();

    const submitHandler = async () => {

        try {
            const res = await axios.post(`${TWEET_API_END_POINT}/create`, { description, id: user?._id }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            });
            dispatch(getRefresh());
            if (res.data.success) {
                toast.success(res.data.message);
            }
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error);
        }
        setDescription("");
    }

    const forYouHandler = () => {
         dispatch(getIsActive(true));
    }
    const followingHandler = () => {
        
        dispatch(getIsActive(false));
    }

    return (
        <div className='w-[100%]'>
            <div>
                <div className='flex items-center justify-evenly border-b border-gray-200'>
                    <div onClick={forYouHandler} className={`${isActive ? "border-b-4 border-blue-600" : "border-b-4 border-transparent"} cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3`}>
                        <h1 className='font-semibold text-gray-600 text-lg'>For you</h1>
                    </div>
                    <div onClick={followingHandler} className={`${!isActive ? "border-b-4 border-blue-600" : "border-b-4 border-transparent"} cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3`}>
                        <h1 className='font-semibold text-gray-600 text-lg'>Following</h1>
                    </div>
                </div>
                <div >
                    <div className='flex items-center p-4'>
                        <div>
                            <Avatar src="https://pbs.twimg.com/profile_images/1510646136297897984/ky40z4PC_400x400.jpg" size="40" round={true} />
                        </div>
                        <input value={description} onChange={(e) => setDescription(e.target.value)} className='w-full outline-none border-none text-xl ml-2' type="text" placeholder='What is happening?!' />
                    </div>
                    <div className='flex items-center justify-between p-4 border-b border-gray-300'>
                        <div>
                            <CiImageOn size="24px" />
                        </div>
                        <button onClick={submitHandler} className='bg-[#1D9BF0] px-4 py-1 text-lg text-white text-right border-none rounded-full '>Post</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

=======
import React from 'react'
import Avatar from 'react-avatar'
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { RiCalendarScheduleLine } from "react-icons/ri";
import Tweet from './Tweet';

const CreatePost = () => {
  return (
    <div className='w-[100%]'>
	<div>
	<div className='flex items-center justify-evenly border-b border-gray-200'>
		<div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
			<h1 className='font-semibold text-grey-600 text-lg cursor-pointer'>For you</h1>
		</div>
		<div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3' >
			<h1 className='font-semibold text-grey-600 text-lg cursor-pointer'>Following</h1>
		</div>
		</div>
		<div className='m-4'>
		<div className='flex items-center p-4'>
			<div>
			<Avatar src="https://pbs.twimg.com/profile_images/1510646136297897984/ky40z4PC_400x400.jpg" size="45" round={true} />
			</div>
			<input className='w-full outline-none border-none text-lg ml-3' type='text' placeholder='what is happening'/>
		</div>
		<div className='flex items-center justify-between my-4 p-4 border-b border-gray-300'>
			<div className='flex mx-6 px-2 gap-2'>
			<CiImageOn size="21px"/>
			<MdOutlineGifBox size="21px"/>
			<RiCalendarScheduleLine size="21px" />
			<CiLocationOn size="21px" />
		
			</div>

			<button className=' bg-[#1D9BF0] text-white font-bold py-1 px-4 border-none rounded-full'>Post</button>
              
		</div>
		<Tweet/>
		</div>
	
	</div>
    </div>
  )
}

>>>>>>> 66a8da562c72f88f0001ca243fee372784c35896
export default CreatePost