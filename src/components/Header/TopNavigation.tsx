
import { Flex, Button, useColorMode } from "@chakra-ui/react";
import "../../styles/components/TopNavigation.css"
function TopNavigation() {
  const { colorMode } = useColorMode();
  const buttonStyles = {
    variant: "ghost",
    borderRadius: "4em",
    // color: "blue.500", 
    _hover: {
      bg: "gray.100", // Example: Change background color on hover
      color: "black"
    },
    fontSize: { base: "xs", md: "lg" },
  }

  return (
    <Flex
      as="nav"
      // className="top-nav"
      position="fixed"
      top="1em"
      left="50%"
      transform="translateX(-50%)" // Adjust for centering
      zIndex="sticky"
      justify="center"
      backdropFilter="blur(20px)" // Blur effect
      // bg="rgba(100, 100, 100, 0.8)" // Glassy background with transparency
      bg={colorMode === "dark" ? "#2D3748" : "rgba(255, 255, 255, 0.8)"} // Adjust background based on color mode
      py={{ base: "0.5em", md: "1em" }} // Responsive vertical padding
      px={{ base: "0em", md: "3em" }} // Responsive horizontal padding
      boxShadow={colorMode === "dark" ? "2px 2px 2px rgba(100, 100, 100, 1)" : "2px 2px 5px rgba(0, 0, 0, 0.1)"} // Optional shadow
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
  )
}

export default TopNavigation;