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

console.info("%c Welcome to Gloria's portfolio 🐥👋", 'font-weight: bold; font-size: 1.5rem;color: gold;border-radius: 4px; margin: 1rem; padding: 0.15rem; text-shadow: 3px 2px 2px #0a0121; background: gray; border: 5px solid purple');
console.info(`\n%c🚀 Resume 🚀%c\nhttps://bit.ly/gloria_lim %c`,
    "color:white; background: purple; font-size:1.5rem; margin: 1rem; padding: 0.15rem auto; font-family: Rockwell, Tahoma, 'Trebuchet MS', Helvetica; border: 2px solid #ceb73f; border-radius: 4px; font-weight: bold; text-shadow: 1px 1px 1px #000000bf;",
    'font-weight: bold; font-size: 1rem;color: #ceb73f; margin: 1rem; padding: 0.15rem',
    "color: #ceb73f; font-size: 0.75rem; font-family: Tahoma, 'Trebuchet MS', Helvetica;",
)

setTimeout(() => {
  console.info(
    `\n%c⚠️ Before You Go ⚠️%c \nConnect with me on LinkedIn! \nhttps://www.linkedin.com/in/glowiep %c`,
    "color:#ceb73f; background: #ceb73f33; font-size:1.5rem; margin: 1rem; padding: 0.15rem auto; font-family: Rockwell, Tahoma, 'Trebuchet MS', Helvetica; border: 2px solid #ceb73f; border-radius: 4px; font-weight: bold; text-shadow: 1px 1px 1px #000000bf;",
    'font-weight: bold; font-size: 1rem;color: #ceb73f; margin: 1rem; padding: 0.15rem',
    "color: #ceb73f; font-size: 0.75rem; font-family: Tahoma, 'Trebuchet MS', Helvetica;",
  );
}, 10000)

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
