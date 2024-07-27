import Home from "./components/Pages/Home/Home";
import TopNavigation from "./components/Header/TopNavigation";
import "./styles/App.css";

import { useLayoutEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import AboutMe from "./components/Pages/AboutMe";

import { InitializeGoogleAnalytics } from "./utils/googleAnalytics";

function Page ({ children  }) {
  const { pathname } = useLocation();  // useLocation hook to get the current pathname
  const hash = location.hash;
  InitializeGoogleAnalytics(pathname, hash);
 
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
    </Routes>
 )
}

console.log('%c Welcome to my portfolio 🐥👋', 'font-weight: bold; font-size: 1.5rem;color: gold;border-radius: 4px; margin: 1rem; padding: 0.15rem; text-shadow: 3px 2px 2px #0a0121; background: gray; border: 5px solid purple');

function App() {  
  return (
    <HashRouter>
      <TopNavigation />
      <Page>
        <AppRoutes />
      </Page>
    </HashRouter>
  );
}

export default App;
