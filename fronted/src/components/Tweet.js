import React from 'react'
import Avatar from 'react-avatar'
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
const Tweet = () => {
  return (
    <div>
<div>
	<div className='flex p-3'> 
	<Avatar src="https://pbs.twimg.com/profile_images/1510646136297897984/ky40z4PC_400x400.jpg" size="40" round={true} />
	<div className='ml-2 w-full'>
	<div className='flex items-center ml-2'>
		<h1 className='font-bold'>Divyanshu</h1>
		<p className='text-gray-500 text-sm ml-1'>@Divyanshufullstack  . 1m</p>
	</div>
	<div>
		<p>Hello my user .....connect new twitter</p>
	</div>
	<div className='flex justify-between my-3'>
		<div className='flex items-center'>
			<div className='p-2 hover:bg-green-100 rounded-full cursor-pointer'>
			<FaRegComment size={16}/>
			</div>
			<p className='ml-1'>0</p>
		</div>
		<div className='flex items-center'> 
			<div  className='p-2 hover:bg-red-100 rounded-full cursor-pointer' >
			<CiHeart size={21}/>
			</div>
			<p className='ml-1'>0</p>
		</div>
		<div className='flex items-center'>
			<div className='p-2 hover:bg-blue-100 rounded-full cursor-pointer'>
		<BiRepost size={21} />
		</div>
		       <p className='ml-1'>0</p>
		</div>
	</div>
	</div>
	</div>
</div>
    </div>
  )
}

export default Tweet