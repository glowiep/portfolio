
import { Flex, Button } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import "../../styles/components/TopNavigation.css"
function TopNavigation() {
  const [showNavBg, setShowNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 10) {
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
    variant: "ghost",
    borderRadius: "4em",
    px: { base: "1em", md: "2em" },
    gap: { base: "0.5em", md: "1em" },
    // color: "blue.500", 
    _hover: {
      bg: "gray.100", // Example: Change background color on hover
      color: "black"
    },
    fontSize: { base: "xs", md: "lg" },
  }

  return (
    <section className="top-navigation">
      <Flex
        as="nav"
        position="fixed"
        top="1em"
        left="50%"
        transform="translateX(-50%)" // Adjust for centering
        zIndex="sticky"
        justify="center"
        backdropFilter="blur(7px)" // Blur effect
        // bg="rgba(100, 100, 100, 0.8)" // Glassy background with transparency
        bg={showNavBg === true && "rgba(120, 120, 120, 0.1)"} // Adjust background based on color mode
        py={{ base: "0.5em", md: "1em" }} // Responsive vertical padding
        px={{ base: "0em", md: "3em" }} // Responsive horizontal padding
        boxShadow={showNavBg === true ? "2px 2px 2px rgba(100, 100, 100, 1)" : "2px 2px 2px rgba(100, 100, 100, 0)"} // Optional shadow
        outline={showNavBg === true ? "solid rgba(92, 101, 116, 0.8)" : "2px 2px 2px rgba(100, 100, 100, 0)"} // Optional shadow
        borderRadius="4em"
        gap={{ base: "0em", md: "1em" }}
        maxW="screen-xl" // Limit maximum width
        minW="20rem" 
      >
        <Button {...buttonStyles}>Home</Button>
        <Button {...buttonStyles}>Work</Button>
        <Button {...buttonStyles}>Projects</Button>
        <Button {...buttonStyles}>About Me</Button>
        </Flex>
      </section>
  )
}

export default TopNavigation;