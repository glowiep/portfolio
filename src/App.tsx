import Home from "./components/Pages/Home/Home";
import TopNavigation from "./components/Header/TopNavigation";
import "./styles/App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./components/Pages/AboutMe";

const AppRoutes = () => {
 return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/AboutMe" element={<AboutMe /> } />
    <Route path="/" element={<Home />} />
    {/* Add more routes here */}
  </Routes>
 )
}

function App() {
  return (
    <BrowserRouter>
      <TopNavigation />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
