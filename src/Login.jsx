import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { USER_API_END_POINT } from './constant';

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("🚀 Form submitted:", input);

    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });

      console.log("✅ Login successful:", res.data);

      // ✅ Redirect to /app after login
      navigate("/app");
    } catch (error) {
      console.error("❌ Login failed:", error);
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
      <div className="p-4 border rounded shadow-sm bg-white" style={{ width: '350px' }}>
        <h3 className="mb-4 text-center">Login</h3>
        <form onSubmit={submitHandler}>
          <div className="mb-3 bg-white">
            <label htmlFor="emailInput" className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              value={input.email}
              className="form-control form-control-sm"
              id="emailInput"
              onChange={changeEventHandler}
              placeholder="Enter your email"
              autoComplete="email"
              required
            />
          </div>

          <div className="mb-3 bg-white">
            <label htmlFor="passwordInput" className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={input.password}
              className="form-control form-control-sm"
              id="passwordInput"
              onChange={changeEventHandler}
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>

          <div className="mt-3 text-center">
            <span className="text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="text-primary">
                Sign up
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;