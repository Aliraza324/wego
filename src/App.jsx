import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ThemePreloader } from "./components/ui/ThemeLoader";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <ThemePreloader isLoading={loading} onLoadingComplete={() => setLoading(false)} minDuration={2000} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;