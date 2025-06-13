// App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import Header from "./components/Headers/Header";
import Footer from "./components/Footer/Footer";
import "./styles/pages.css";

function App() {
  return (
    <Router>
      <div className="main-layout">
        <Header />

        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/admission" element={<AdmissionsPage />} />
            {/* <Route path="/chat" element={<ChatbotComponent />} /> */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

        </div>

        <ChatbotComponent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
