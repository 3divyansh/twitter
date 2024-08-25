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

export default CreatePost