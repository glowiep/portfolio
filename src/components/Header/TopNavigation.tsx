
import { Flex } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../../styles/components/TopNavigation.css"

import { MotionButton } from "../Motion";

function TopNavigation() {
  const [showNavBg, setShowNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 80) {
        setShowNavBg(true);
      } else {
        setShowNavBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const buttonStyles = {
    whileTap: { scale: 0.5, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' },
    whileHover: { scale: 1.1 },
    // transition: { type: "spring", stiffness: 400, damping: 17 },
    variant: "ghost",
    borderRadius: "4em",
    px: { base: "1em", md: "2em" },
    gap: { base: "0.5em", md: "1em" },
    _hover: {
      bg: "gray.100", 
      color: "black"
    },
    fontSize: { base: "sm", md: "lg" },
  }

  return (
    <section className="top-navigation">
      <Flex
        as="nav"
        position="fixed"
        top="2.5em"
        left="50%"
        transform="translateX(-50%)" // Adjust for centering
        zIndex="sticky"
        justify="center"
        backdropFilter="blur(7px)" // Blur effect
        bg={showNavBg === true && "rgba(120, 120, 120, 0.1)"} // Adjust background based on color mode
        py={{ base: "0.5em", md: "1em" }} // Responsive vertical padding
        px={{ base: "0em", md: "3em" }} // Responsive horizontal padding
        // boxShadow={showNavBg === true ? "2px 2px 2px rgba(100, 100, 100, 1)" : "2px 2px 2px rgba(100, 100, 100, 0)"} // Optional shadow
        // outline={showNavBg === true ? "solid rgba(92, 101, 116, 0.8)" : "2px 2px 2px rgba(100, 100, 100, 0)"} // Optional shadow
        borderRadius="4em"
        gap={{ base: "0em", md: "1em" }}
        maxW="screen-xl" // Limit maximum width
        minW="20rem" 
      >
        <a href="/#home"><MotionButton {...buttonStyles}>Home</MotionButton></a>
        <a href="/portfolio/#project-list"><MotionButton {...buttonStyles}>Projects</MotionButton></a>
        {/* <Link to="/"><MotionButton {...buttonStyles}>Work</MotionButton></Link> */}
        <Link to="/AboutMe"><MotionButton {...buttonStyles}>About Me</MotionButton></Link>
      </Flex>
    </section>
  )
}

export default TopNavigation;