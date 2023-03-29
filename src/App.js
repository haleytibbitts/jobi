import { Routes, Route } from "react-router-dom";
import "./App.scss";
import firebase from "./firebase";
import Header from "./components/Header";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import BottomNav from "./components/BottomNav";
import Footer from "./components/Footer";
import JobListings from "./components/JobListings";
import JobDetails from "./components/JobDetails";
import Error from "./components/Error";
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, push } from "firebase/database";
import axios from "axios";
import { v4 as uuid } from "uuid";

function App() {
  const [jobs, setJobs] = useState([]);
  const [curJob, setCurJob] = useState({});
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isDropDown, setIsDropDown] = useState(false);

  const handleDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  useEffect(() => {
    try {
      const database = getDatabase(firebase);
      const dbRef = ref(database, "allJobs");
      onValue(dbRef, (response) => {
        const data = response.val();
        const newState = [];
        for (let key in data) {
          newState.push(data[key]);
        }
        setJobs(newState);
      });
    } catch (error) {
      alert(error);
    }
  }, []);

  return (
    <div>
      <Header
        jobs={jobs}
        curJob={curJob}
        setFilteredJobs={setFilteredJobs}
        isDropDown={isDropDown}
        setIsDropDown={setIsDropDown}
        handleDropDown={handleDropDown}
      />

      <Routes>
        <Route path="/" element={<Home jobs={jobs} />} />
        <Route
          path="/jobs"
          element={
            <JobListings
              jobs={jobs}
              filteredJobs={filteredJobs}
              isDropDown={isDropDown}
              setIsDropDown={setIsDropDown}
              handleDropDown={handleDropDown}
            />
          }
        />
        <Route
          path="/jobs/:pageId"
          element={
            <JobDetails jobs={jobs} curJob={curJob} setCurJob={setCurJob} />
          }
        />
        {/* FUTURE IMPLEMENTATIONS
        <Route path="/about-us" />
        <Route path="/blog" />
        <Route path="/blog/:id" />
        <Route path="/profile/:username" />
        <Route path="/candidates" />
        <Route path="/careers" />
        <Route path="/categories" />
        <Route path="/companies" />
        <Route path="/contact" />
        <Route path="/delete" />
        <Route path="/faq" />
        <Route path="/login" />
        <Route path="/post" />
        <Route path="/pricing" />
        <Route path="/register" /> */}
        <Route path="*" element={<Error />} />
      </Routes>

      <SignUp />
      <BottomNav />
      <Footer />
    </div>
  );
}

export default App;
