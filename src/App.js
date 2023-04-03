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
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import ToTop from "./components/ToTop";
import Loader from "./components/Loader";
import MountLoader from "./components/MountLoader";

function App() {
  const [jobs, setJobs] = useState([]);
  const [curJob, setCurJob] = useState({});
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isDropDown, setIsDropDown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mountAnimation, setMountAnimation] = useState(true);

  const headerRef = useRef(null);

  const handleDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  useEffect(() => {
    let visited = sessionStorage.getItem("visited");

    if (visited) {
      setMountAnimation(false);
    } else {
      setTimeout(() => {
        setMountAnimation(false);
        sessionStorage.setItem("visited", true);
      }, 5000);
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);

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
        setIsLoading(false);
      });
    } catch (error) {
      alert(error);
      setIsLoading(false);
    }
  }, []);

  const [isMobile, setIsMobile] = useState();
  const [isTablet, setIsTablet] = useState();

  useEffect(() => {
    window.addEventListener("load", () => {
      if (window.innerWidth < 1026 && window.innerWidth >= 769) {
        setIsTablet(true);
      } else {
        setIsTablet(false);
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth < 1026 && window.innerWidth >= 769) {
        setIsTablet(true);
      } else {
        setIsTablet(false);
      }
    });

    window.addEventListener("load", () => {
      if (window.innerWidth < 769) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth < 769) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      {mountAnimation ? <MountLoader /> : null}
      <Header
        jobs={jobs}
        curJob={curJob}
        setFilteredJobs={setFilteredJobs}
        isDropDown={isDropDown}
        setIsDropDown={setIsDropDown}
        handleDropDown={handleDropDown}
        headerRef={headerRef}
        isTablet={isTablet}
        isMobile={isMobile}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home jobs={jobs} isMobile={isMobile} headerRef={headerRef} />
          }
        />
        <Route
          path="/jobs"
          element={
            <JobListings
              jobs={jobs}
              filteredJobs={filteredJobs}
              isMobile={isMobile}
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
      <ToTop headerRef={headerRef} />
    </div>
  );
}

export default App;
