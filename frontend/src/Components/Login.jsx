import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Api from '../Api/Api';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();


  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${Api}/users/login`, formData);
      setMessage(response.data.message);
      navigate('/dashboard');

    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'An error occurred');
    }
  };

  return (
    <div className="flex flex-col-reverse md:flex-row min-h-screen">
      <div className="w-full md:w-1/2 bg-blue-600 flex items-center justify-center p-10">
        <img src={logo} alt="VSB Logo" className="max-w-full h-auto" />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 p-6">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Login
              </button>
            </div>
          </form>

          {message && <p className="mt-2 text-center text-sm text-blue-600">{message}</p>}

          <div className="text-sm mt-5 text-center">
            <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">Register</Link>
            <span className="px-2 text-gray-500">|</span>
            <Link to="/admin-login" className="font-medium text-blue-600 hover:text-blue-500">Admin Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;