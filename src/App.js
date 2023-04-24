import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import AddItems from "./components/AddItems";
import SplashPage from "./components/SplashPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewFoodForm from "./components/NewFoodForm";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";



export default function App() {
  return (
    <Router>
      <div>
        <div className="container">
          <Header />
          <div className="container--box">
            <Menu />
            <Routes>
              <Route path="/" element={<SplashPage />} default />
              <Route path="/additems" element={<AddItems />} />
              <Route path="/newfoodform" element={<NewFoodForm />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
