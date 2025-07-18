import axios from "../../api/axiosconfig";
import { loadUser } from "../reducers/userSlice";

// ✅ Load user from localStorage if available
export const asyncCurrentUser = () => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(loadUser(user));
    } else {
      console.log("User not logged in!");
    }
  } catch (error) {
    console.error("Error loading current user:", error);
  }
};

// ✅ Logout user
export const asyncLogoutUser = () => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");
    console.log("user loged out!");
    // Optionally clear user from redux store too:
    dispatch(loadUser(null));
  } catch (error) {
    console.error("Error logging out:", error);
  }
};

// ✅ Login user with email and password
export const asyncLoginUser = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&passward=${user.passward}`
    );

    if (data.length > 0) {
      localStorage.setItem("user", JSON.stringify(data[0]));
      dispatch(loadUser(data[0]));
    } else {
      console.log("Invalid credentials!");
    }
  } catch (error) {
    console.error("Login error:", error);
  }
};

// ✅ Register user and auto-login
export const asyncRegisterUser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
    console.log("User registered:", res.data);

    localStorage.setItem("user", JSON.stringify(res.data));
    dispatch(loadUser(res.data));
  } catch (error) {
    console.error("Registration error:", error);
  }
};
