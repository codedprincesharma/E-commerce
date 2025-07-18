import axios from "../api/axiosconfig";
import { loadUser } from "./features/userSlice";
const getUser = () => async (dispatch,getState) => {


  
  try {
      console.log(getState());

    const res = await axios.get("/users");
    dispatch(loadUser(res.data));
  } catch (error) {
    console.log(error);
  }
};

export default getUser;
