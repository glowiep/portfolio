import ReactGA from "react-ga4";
import { useEffect } from "react";
const VITE_GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

/**
 * Initialize Google Analytics (GA4)
 * @param pathname - path to the current URL
 * @param hash - the location hash for the URL
 */
export const InitializeGoogleAnalytics = function(pathname, hash) {
  let hashTitle = ""

  // Find the index of '#' starting from the end of the string
  const hashIndex = hash.lastIndexOf("#");
  if (hashIndex !== -1) {
    // Extract characters after '#' starting from the right
    hashTitle = hash.substring(hashIndex + 1);
    // console.log("hash title: ", hashTitle); // Outputs "substring"
  } else {
    console.log("No '#' found in the text.");
  }

  useEffect(() => {    
    ReactGA.initialize(VITE_GA_MEASUREMENT_ID);
    ReactGA.send({ hitType: "pageview", page: pathname, title: hashTitle });
  }, [pathname, hash]);
}

/**
 * Handle click events that are to be tracked with GA4
 * @param label - Event action label
 * @param category - Event category
 */
export const handleGAClick = (label, category) => {
  ReactGA.event({
    label,
    category,
    action: `Click ${label}`
  })
};