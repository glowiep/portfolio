import Home from "./components/Pages/Home/Home";
import TopNavigation from "./components/Header/TopNavigation";
import "./styles/App.css";

import { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AboutMe from "./components/Pages/AboutMe";

function Page ({ children  }) {
  const { pathname } = useLocation();  // useLocation hook to get the current pathname

  // Scroll to top on route change
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div style={{ overflowY: "hidden" }}>
      {children}
    </div>
  )
}
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
      <Page>
        <AppRoutes />
      </Page>
    </BrowserRouter>
  );
}

export default App;
