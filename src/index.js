import React from "react";
import ReactDOM from "react-dom/client";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";
import Box1 from "./Components/Box1";
import Box2 from "./Components/Box2";
import FreelancerExplore from "./Components/FreelancerExplore";
import HirerExplore from "./Components/HirerExplore";
import BoxSelection from "./Components/BoxSelection";
import LoginPage from "./Components/LoginPage";
import "./index.css";
import App from "./App";
import PostJob from "./Components/PostJob";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router basename="/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route exact path="*" element={<PageNotFound />} />
        <Route path="/" element={<BoxSelection />} />
        <Route path="/hiring-dashboard" element={<Box1 />} />
        <Route path="/freelance-dashboard" element={<Box2 />} />
        <Route path="/hirer-explore" element={<HirerExplore />} />
        <Route path="/freelancer-explore" element={<FreelancerExplore />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/postjob" element={<PostJob />} />
      </Routes>
    </Router>
  </>
);

{
  /* <Route exact path="/product-page" element={<ProductPage />} /> */
}
{
  /*  Routes 
    Hirer dashboards
    Hirer explore
    Freelancer dashboard
    Freelancer explore/jobsExpand ( Nested Routes)



*/
}
