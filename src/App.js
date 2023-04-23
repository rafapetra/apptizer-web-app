import React from "react"
import Header from "./components/Header"
import Menu from "./components/Menu"
import Content from "./components/Content"
import SplashPage from "./components/SplashPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewFoodForm from "./components/NewFoodForm";

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
              <Route path="/content" element={<Content />} />
              <Route path="/newfoodform" element={<NewFoodForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
