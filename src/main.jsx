import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Hero, Events, Donate, Alumini, JobPortal  } from "./components/Index.js";
=======
import {
  Home,
  Events,
  Donate,
  Alumini,
  JobPortal,
  SignIn,
  SignOut,
  Otp,
} from "./components/Index.js";
=======
import Layout from "./Layout";
import Dashboard from "./components/Dashboard/Dashboard.jsx";

import Layout from "./Layout";
import Testi from "./components/Testimonials/Testi.jsx";
import Paypg from "./components/Payment/Paypg.jsx";
import DirPortal from "./components/Directory/DirPortal.jsx";
import Landing from "./components/Landing/Landing.jsx";
import SignIn from "./components/SignIn.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>

  <Routes>
    <Route path="/" element={<Layout />}>
      {/* <Route path="" element={<Hero />} /> */}
      <Route path="" element={<Landing />} />
      <Route path="events" element={<Events />} />
      <Route path="jobportal" element={<JobPortal />} />
      <Route path='donate' element={<Donate />} />
      <Route path='signin' element={<SignIn />} />
      <Route path="alumdir" element={<Alumini />} />
      <Route path="dirportal" element={<DirPortal/>} />
      <Route path="donate/Payment" element={<Paypg />} />
      <Route path="testimonial" element={<Testi />} />
 
    </Route>
  </Routes>
</BrowserRouter>
=======
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/events" element={<Events />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/alumini" element={<Alumini />} />
        <Route path="/jobs" element={<JobPortal />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>,

);
