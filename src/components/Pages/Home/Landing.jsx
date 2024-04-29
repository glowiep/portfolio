import React from "react";
import { Box, Flex, useBreakpointValue, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Typewriter from "./Typewriter";
import "../../../styles/components/Home.css";


function Landing() {
  const headingFontSize = useBreakpointValue({ base: "2.5em", md: "6em" });
  const typewriterFontSize = useBreakpointValue({ base: "1.5em", md: "2em" });
  const introFontSize = useBreakpointValue({ base: "1.25em", md: "2em" });
  const introWidth = useBreakpointValue({ base: "100%", md: "50%" });

  
  const buttonStyles = {
    whileTap: { scale: 0.5, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' },
    whileHover: { scale: 1.1 },
    background: "#5420A3",
    borderRadius: "4em",
    px: { base: "1em", md: "2em" },
    gap: { base: "0.5em", md: "1em" },
    _hover: {
      bg: "#A57DF4",
    },
    fontSize: { base: "xs", md: "lg" },
  }

  return (
    <section>
      <Flex
        direction="column" // Set flex direction to column
        justifyContent="center" // Center content vertically
        alignItems="center" // Center content horizontally
        h="100vh" // Set height to full viewport height
      >
        <Box>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            style={{
              backgroundImage: "linear-gradient(to left, #7928CA, #FF0080)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontSize: headingFontSize,
              fontWeight: "bold",
              paddingBottom: "0.3em",
              textAlign: 'center',
            }}
          >
            Hello. I'm Gloria.
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "white",
              fontSize: introFontSize,
              // width: introWidth,
              paddingLeft: "15%",
              paddingRight: "15%",
              textAlign: 'center',
            }}
          >
            I am a Web Developer passionate about creating experiences that are easy to use, accessible and fulfils the user's needs.
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              fontSize: typewriterFontSize,
              textAlign: 'center',
              paddingTop: "2em",
            }}
          >
            I strive to
            <div
              id="typewriter"
              style={{
                fontSize: typewriterFontSize,
              }}
            >
              <Typewriter
                phrases={["Create", "Learn", "Grow", "Make Connections"]}
                sleepTime={100}
              />
              <span id="cursor">|</span>
            </div>
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.75 }}
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "white",
              fontSize: typewriterFontSize,
              paddingTop: "2.5em",
              paddingLeft: "15%",
              paddingRight: "15%",
              textAlign: 'center',
            }}
          >
            <Button {...buttonStyles}><a href="#projectList">View My Projects</a></Button>
          </motion.h1>
        </Box>
      </Flex>
    </section>
  )
}

export default Landing;