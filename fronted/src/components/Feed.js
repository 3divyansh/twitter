<<<<<<< HEAD
import React from 'react'
import CreatePost from './CreatePost.js'
import Tweet from './Tweet.js'
import {useSelector} from "react-redux";

const Feed = () => {
  const {tweets} = useSelector(store=>store.tweet);
  return (
    <div className='w-[50%] border border-gray-200'>
      <div>
        <CreatePost/>
        {
          tweets?.map((tweet)=> <Tweet key={tweet?._id} tweet={tweet}/>)
        }
        
         
      </div>
    </div>
  )
}

=======
import React from 'react'
import CreatePost from './CreatePost'

const Feed = () => {
  return (
    <div className='w-[50%] border border-gray-200'>
      <div>
        <CreatePost />
      </div>
    </div>
  )
}

>>>>>>> 66a8da562c72f88f0001ca243fee372784c35896
export default Feed