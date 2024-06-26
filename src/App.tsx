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
