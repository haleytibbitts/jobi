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

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobListings />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
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
