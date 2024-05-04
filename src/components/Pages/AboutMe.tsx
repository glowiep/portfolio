import { motion } from "framer-motion";
import { Text, Box, Flex, Avatar } from "@chakra-ui/react";
import { MotionBox } from "../Motion";
import Milestones from "../Content/Milestones";
import Timeline from "../Content/Timeline";
import MyUrls from "../Content/MyURLs";

function AboutMe() {
  return (
    <section>
      <Flex
        direction="column" // Set flex direction to column
        justifyContent="center" // Center content vertically
        alignItems="center" // Center content horizontally
        h="100vh" // Set height to full viewport height
      >
        <Box pt="60px">
          <Text
            bg="white"
            bgClip="text"
            fontSize={{ base: "5xl", md: "6xl" }}
            fontWeight="extrabold"
            paddingTop="1em"
          >
            About Me
          </Text>
        </Box>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          style={{
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            fontSize: "2em",
            textAlign: "center",
            paddingTop: "2em",
          }}
        >
          <MotionBox
            whileHover={{ scale: 1.2 }}
            rounded="full"
            paddingBottom="2em"
          >
            <Avatar
              size="2xl"
              name="Gloria Lim"
              src="public/images/profile-pic-1.PNG"
              showBorder={true}
            />
          </MotionBox>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          style={{
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            textAlign: "center",
          }}
        >
          <MyUrls />
        </motion.div>

        {/* <Text bg="white" bgClip="text" fontSize={{ base: "2xl", md:"4xl"}}>
          About Me
        </Text> */}
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "white",
            fontSize: "1.5em",
            paddingLeft: "15%",
            paddingRight: "15%",
            textAlign: "center",
            paddingTop: "1.25em",
            lineHeight: "2em",
          }}
        >
          One of the most important things to me in software development is
          clean, self-documenting code. 
        </motion.h1>
      </Flex>
      <Milestones />
      <Timeline />
      <div>
        Favorite books: The Clean Coder by Robert C. Martin
        <br />
        Laws of UX by Jon Yablonski
      </div>
    </section>
  );
}

export default AboutMe;
