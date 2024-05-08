import Home from "./components/Pages/Home/Home";
import TopNavigation from "./components/Header/TopNavigation";
import "./styles/App.css";

import { useLayoutEffect, useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import AboutMe from "./components/Pages/AboutMe";

import ReactGA from "react-ga4";
const VITE_GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

function Page ({ children  }) {
  const { pathname } = useLocation();  // useLocation hook to get the current pathname

  const hash = location.hash
  // Find the index of '#' starting from the end of the string
  const hashIndex = hash.lastIndexOf("#");

  let hashTitle = ""
  if (hashIndex !== -1) {
    // Extract characters after '#' starting from the right
    hashTitle = hash.substring(hashIndex + 1);
    // console.log("hash title: ", hashTitle); // Outputs "substring"
  } else {
    // console.log("No '#' found in the text.");
  }

  // Scroll to top on route change
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {    
    ReactGA.initialize(VITE_GA_MEASUREMENT_ID);
    ReactGA.send({ hitType: "pageview", page: pathname, title: hashTitle });
  }, [pathname, hash]);

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
  // useEffect(() => {    
  //   ReactGA.initialize(VITE_GA_MEASUREMENT_ID);
  //   ReactGA.send({ hitType: "pageview", page: {pathname}, title: "Porfolio" });
  // }, []);

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
