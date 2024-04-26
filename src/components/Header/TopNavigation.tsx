
import { Flex, Button, useColorMode } from "@chakra-ui/react";

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
  }

  return (
    <Flex
      as="nav"
      position="fixed"
      top="1em"
      left="50%"
      transform="translateX(-50%)" // Adjust for centering
      zIndex="sticky"
      justify="center"
      // bg="rgba(255, 255, 255, 0.8)" // Glassy background with transparency
      bg={colorMode === "dark" ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)"} // Adjust background based on color mode
      py="1em" // Vertical padding
      px="3em"
      boxShadow={colorMode === "dark" ? "2px 2px 5px rgba(100, 90, 100, 0.7)" : "2px 2px 5px rgba(0, 0, 0, 0.1)"} // Optional shadow
      borderRadius="4em"
      gap="1em"
    >
      <Button {...buttonStyles}>Home</Button>
      <Button {...buttonStyles}>Work</Button>
      <Button {...buttonStyles}>Projects</Button>
      <Button {...buttonStyles}>About Me</Button>
      </Flex>
  )
}

export default TopNavigation;