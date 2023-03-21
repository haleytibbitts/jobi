import { Routes, Route } from "react-router-dom";
import "./App.scss";
import firebase from "./firebase";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

// SWAYDO CODE
// COMPONENTS
// TopNav ✅
// Header ✅
// Home
// Category
// TrendingJob
// Review
// Guides
// JobListings
// Filter
// JobPreview
// FullListing
// Error
// SignUp
// BottomNav
// Footer
