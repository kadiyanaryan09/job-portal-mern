import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './Login';
import Signup from './Signup';
import AuthLayout from './AuthLayout';
import Home from './Home';
import Jobs from './Jobs';
import Browse from './Browse';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from "@/components/ui/sonner";

import Profile from './profile';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <Toaster />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/auth" element={<AuthLayout />} />
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  
  </React.StrictMode>
);