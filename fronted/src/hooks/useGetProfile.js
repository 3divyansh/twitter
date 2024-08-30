import axios from "axios";
import { USER_API_END_POINT } from '../utils/constant';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyProfile } from "../redux/actionTypes";
import { GET_USER } from "../redux/actionTypes";

const useGetProfile = () => {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.user.user); 
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;
      const fetchProfile =  (id) => {
        return async dispatch =>{
            try {
                const res = await axios.get(`${USER_API_END_POINT}/profile/${id}`, {
                    withCredentials: true,
                });
                if (res.data && res.data.user) {
                    dispatch(getMyProfile(res.data.user));
                    dispatch(GET_USER(res.data.user));
                       setProfile(res.data.user);
                }
            } catch (error) {
                setError(error);
            }
        }
        };

        fetchProfile();
    }, [dispatch, id]);

    return { profile, error };
};

export default useGetProfile;








// import axios from "axios";
// import { USER_API_END_POINT } from '../utils/constant';
// import {  useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getMyProfile } from "../redux/actionTypes";
// import { GET_USER } from "../redux/actionTypes";
// const useGetProfile = () => {
//     const dispatch = useDispatch();
//     const id = useSelector((state) => state.user.user); 
//     const [profile, setProfile] = useState(null);
//     const [error, setError] = useState(null);
    
//   const fetchProfile = async () => {
//     console.log(id,"inside user get profile")
//         if (!id) return;
//         try {

//             const res = await axios.get(`${USER_API_END_POINT}/profile/${id}`, {
//                 withCredentials: true
//             });
//             dispatch(getMyProfile(res.data.user));
//             dispatch(GET_USER(res.data.user));
//             setProfile(res.data.user);
//         } catch (error) {
//             setError(error);
//         }
//     };


//     return { profile, error };
// };

// export default useGetProfile;