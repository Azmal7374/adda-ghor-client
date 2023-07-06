import {  useEffect } from "react";
// import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: 'https://bistro-boss-server-gray-ten.vercel.app', 
});

const useAxiosSecure = () => {
  const { logOut } = useAuth()
  const navigate = useNavigate();

  
  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('access_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await logOut();
          navigate('/login');
        }
        console.log(error)
       
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);

  return [axiosSecure];
};
export default useAxiosSecure;
