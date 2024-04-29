// import background from "/home/labber/myProjects/portfolio/gloria-lim-portfolio/portfolio/src/assets/images/gradient.svg"
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Typewriter from "./Typewriter.jsx"
import "../../../styles/components/Home.css"

function Home() {
  const headingFontSize = useBreakpointValue({ base: "2.5em", md: "6em" });
  const typewriterFontSize = useBreakpointValue({ base: "1.5em", md: "2em" });

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
              paddingBottom: "0.3em"
            }}
          >
            Hello. I'm Gloria.
          </motion.h1>
          <h1 style={{
            fontSize: typewriterFontSize,
          }}>
            I strive to
            <div id="typewriter" style={{
            fontSize: typewriterFontSize,
          }}>
              <Typewriter phrases={["Create", "Learn", "Grow"]} sleepTime={100}/>
              <span id="cursor">|</span>
            </div>
          </h1>
        </Box>
      </Flex>
    </section>
  );
}

export default Home;
