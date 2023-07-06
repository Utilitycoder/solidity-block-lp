import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Story from "./components/Story";


const App = () => {
  return (
      <div className="w-full min-h-screen min-w-fit">
        <div className="bg-navy-blue">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
         </Routes>
          <Footer />
        </div>
      </div>
  );
};

export default App;
