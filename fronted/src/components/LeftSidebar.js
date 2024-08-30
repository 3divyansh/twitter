import React from 'react'
import Logo from '../img/twitter-logo.avif'
import { GoHome } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";
import { FaFacebookMessenger } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const LeftSidebar = () => {
	const userId = useSelector((state) => state.user.user);
  return (
    <>
    <div className='w-[20%]'>
	<div>
		<div>
			<img className='ml-1' width={"55px"} src={Logo} alt="Twitter Logo" />
              </div>
		<div className='my-5'>
			<Link to="/" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
			<div><GoHome size={"24px"}/></div>
			<h1 className='font-bold text-lg ml-3'>Home</h1>
			</Link>

			<div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
			<div><IoSearchOutline size={"24px"}/></div>
			<h1 className='font-bold text-lg ml-3'>Explore</h1>
			</div>

			<div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
			<div><IoIosNotificationsOutline size={"24px"}/></div>
			<h1 className='font-bold text-lg ml-3'>Notifications</h1>
			</div>

			<div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
			<div><CiBookmark size={"24px"}/></div>
			<h1 className='font-bold text-lg ml-3'>Bookmarks</h1>
			</div>

			<div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
			<div><FaFacebookMessenger size={"24px"}/></div>
			<h1 className='font-bold text-lg ml-3'>message</h1>
			</div>


			<Link to={`/profile/${userId?._id}`} className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
			<div><FaUserCircle size={"24px"}/></div>
			<h1 className='font-bold text-lg ml-3'>Profile</h1>
			</Link>

			<div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
			<div><IoMdLogOut size={"24px"}/></div>
			<h1 className='font-bold text-lg ml-3'>Logout</h1>
			</div>
			
			<button className='px-4 py-3 border-none text-md bg-[#1D9BF0] w-[70%] text-white font-bold rounded-full' >Post</button>
		</div>
		</div>
	</div>
   
    </>
  )
}

export default LeftSidebar