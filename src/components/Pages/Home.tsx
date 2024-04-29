// import background from "/home/labber/myProjects/portfolio/gloria-lim-portfolio/portfolio/src/assets/images/gradient.svg"
import { Text, Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Home() {
  return (
    <section>
      <Flex
        direction="column" // Set flex direction to column
        justifyContent="center" // Center content vertically
        alignItems="center" // Center content horizontally
        h="100vh" // Set height to full viewport height
      >
        <Box pt="60px">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            style={{
              backgroundImage: "linear-gradient(to left, #7928CA, #FF0080)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontSize: "5em",
              fontWeight: "bold",
            }}
          >
            Hello. I'm Gloria.
          </motion.h1>
        </Box>
      </Flex>
    </section>
  );
}

export default Home;
