import axios from "axios";
import authHeader from "./authHeader";

// Register user
const register = async (userData) => {
  const response = await axios.post("register", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = (userData) => {
  return axios.post("login", userData).then((response) => {
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("token", response.data.token);
    }
    return response.data;
  });
};

const getUser = async () => {
  const response = await axios.get("user-profile", {
    headers: authHeader(),
  });
return response.data
  
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
  getUser,
};

export default authService;
