import React from "react";
import { Box, Text, Flex, useBreakpointValue, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Typewriter from "./Typewriter";
import "../../../styles/components/Home.css";


function Landing() {
  const headingFontSize = useBreakpointValue({ base: "2.5em", md: "4.75em" });
  const typewriterFontSize = useBreakpointValue({ base: "1.5em", md: "2em" });
  const introFontSize = useBreakpointValue({ base: "1.25em", md: "1.75em" });
  const introWidth = useBreakpointValue({ base: "100%", md: "50%" });

  
  const buttonStyles = {
    background: "#5420A3",
    borderRadius: "4em",
    px: { base: "1em", md: "2em" },
    gap: { base: "0.5em", md: "1em" },
    _hover: {
      bg: "#A57DF4",
    },
    fontSize: { base: "15", md: "lg" },
  }

  return (
    <section>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
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
              paddingTop:"0.75em",
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
              paddingTop: "1.25em",
            }}
          >
            I craft digital experiences that are performant, accessible and fulfils the user's needs
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              fontSize: typewriterFontSize,
              textAlign: 'center',
              paddingTop: "2.25em",
            }}
          >
            <Box>
              <Text as="div" fontStyle="italic">
                I strive to
              </Text>
            </Box>

            <div
              id="typewriter"
              style={{
                fontSize: typewriterFontSize,
              }}
            >
              <Typewriter
                phrases={["Create", "Learn", "Grow", "Build Connections"]}
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
              paddingTop: "2.25em",
              paddingLeft: "15%",
              paddingRight: "15%",
              textAlign: 'center',
            }}
          >
            <a href="#project-list">
              <Button {...buttonStyles}>
                View My Projects
              </Button>
            </a>
          </motion.h1>
        </Box>
      </Flex>
    </section>
  )
}

export default Landing;