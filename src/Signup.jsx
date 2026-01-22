import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { USER_API_END_POINT } from './constant';

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    mobno: "",
    role: "",
    file: null
  });
 const navigate = useNavigate(); // ✅ Correct

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
  };

  const changeFileHandler = (e) => {
    setInput(prev => ({ ...prev, file: e.target.files?.[0] || null }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("🚀 Submitting form:", input);

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("mobno", input.mobno);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        withCredentials: true
        
      });
      console.log("✅ Signup successful:", res.data);
      // You can trigger a toast or redirect here
      navigate("/app");
    } catch (error) {
      console.error("❌ Signup failed:", error);
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-white">
      <div className="w-100 d-flex justify-content-center">
        <div className="p-4 border rounded shadow-sm bg-white" style={{ maxWidth: '400px', width: '100%' }}>
          <h3 className="mb-4 text-center">Signup</h3>
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">Name</label>
              <input
                type="text"
                name="fullname"
                value={input.fullname}
                autoComplete="name"
                className="form-control form-control-sm"
                id="nameInput"
                onChange={changeEventHandler}
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                value={input.email}
                autoComplete="username"
                className="form-control form-control-sm"
                id="emailInput"
                onChange={changeEventHandler}
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="passwordInput" className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={input.password}
                autoComplete="new-password"
                className="form-control form-control-sm"
                id="passwordInput"
                onChange={changeEventHandler}
                placeholder="Create a password"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="mobileInput" className="form-label">Mobile No</label>
              <input
                type="tel"
                name="mobno"
                value={input.mobno}
                autoComplete="tel"
                className="form-control form-control-sm"
                id="mobileInput"
                onChange={changeEventHandler}
                placeholder="Enter your mobile number"
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="radio"
                name="role"
                value="Student"
                checked={input.role === 'Student'}
                className="form-check-input"
                id="studentCheck"
                onChange={changeEventHandler}
              />
              <label className="form-check-label" htmlFor="studentCheck">Student</label>
            </div>

            <div className="mb-3 form-check">
              <input
                type="radio"
                name="role"
                value="Recruiter"
                checked={input.role === 'Recruiter'}
                className="form-check-input"
                id="recruiterCheck"
                onChange={changeEventHandler}
              />
              <label className="form-check-label" htmlFor="recruiterCheck">Recruiter</label>
            </div>

            <div className="mb-3">
              <label htmlFor="profileInput" className="form-label">Profile Image</label>
              <input
                type="file"
                accept="image/*"
                className="form-control form-control-sm"
                id="profileInput"
                onChange={changeFileHandler}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Signup
            </button>
            <span className="text-sm d-block text-center mt-2">
              Already have an account?{' '}
              <Link to="/login" className="text-primary">
                Login
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;