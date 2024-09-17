import axios from "axios";
import { USER_API_END_POINT } from '../utils/constant';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOtherUsers } from "../redux/actionTypes";

const useOtherUser = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.user);
  const [otherUsers, setOtherUsers] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchOtherUser = async () => {
      try {
        const res = await axios.get(`${USER_API_END_POINT}/otherUser/${id}`, {
          withCredentials: true
        });

        if (res.data && res.data.otherUsers) {
          setOtherUsers(res.data.otherUsers);
          dispatch(getOtherUsers(res.data.otherUsers));
        }
      } catch (error) {
        setError(error);
      }
    };

    fetchOtherUser();
  }, [id, dispatch]);

  return { otherUsers, error };
};

export default useOtherUser;



