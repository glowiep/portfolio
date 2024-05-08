import Home from "./components/Pages/Home/Home";
import TopNavigation from "./components/Header/TopNavigation";
import "./styles/App.css";

import { useLayoutEffect, useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import AboutMe from "./components/Pages/AboutMe";

import ReactGA from "react-ga";
const VITE_GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

ReactGA.initialize(VITE_GA_MEASUREMENT_ID);

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
    </Routes>
 )
}

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, []);

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
