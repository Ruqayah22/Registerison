import axios from "axios"; 

const userURL = "http://localhost:5000";


export const login = async (email,password) => {
  try {
    const body = {email: email, password: password}
    const response = await axios.post(`${userURL}/auth/login`,body);
    return response.data;
    
  } catch (error) {
    console.log("Error while calling get Customers API", error);
    throw error;
  }
};

export const register = async (signupUser) => {
  try {
    return await axios.post(`${userURL}/auth/register`, signupUser);
  } catch (error) {
    console.log("Error while calling get Customers API", error);
  }
};