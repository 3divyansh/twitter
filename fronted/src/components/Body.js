<<<<<<< HEAD
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import Feed from './Feed';
import Profile from './Profile';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
            children:[
                {
                    path:"/",
                    element:<Feed/>
                },
                {
                    path:"/profile/:id",
                    element:<Profile/>
                }
            ]
        },
        {
            path: "/login",
            element: <Login />
        }
    ])
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

=======
import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Feed from './Feed'
import Profile from './Profile'
const Body = () => {
	const  appRouter = createBrowserRouter([
		{
			path:"/",
			element:<Home/>,
			children:[
				{
					path:"/",
                                   element:<Feed />
				},
				{
					path:"/profile/:id",
					element:<Profile />
				}
			]
		},
		{
			path:"/login",
			element:<Login/>
		}
		
	])
  return (
    <div>
	<RouterProvider router={appRouter}/>
    </div>
  )
}

>>>>>>> 66a8da562c72f88f0001ca243fee372784c35896
export default Body