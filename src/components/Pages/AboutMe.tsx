import { motion } from "framer-motion";
import { Text, Box, Flex, Avatar } from "@chakra-ui/react";
import { MotionBox } from "../Motion";
// import Milestones from "../Content/Milestones";
import Timeline from "../Content/Timeline";
import MyUrls from "../Content/MyURLs";
import FavoriteBooks from "../Content/FavoriteBooks";

function AboutMe() {
  return (
    <section>
      <Flex
        direction="column" 
        justifyContent="center"
        alignItems="center" 
        h="100vh"
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
            paddingTop: "1.5em",
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
            paddingTop: "2em",
            lineHeight: "2em",
          }}
        >
          Hello! My name is Gloria. <br />
          I enjoy working on React side-projects during my free time. <br />
          {/*           
           Similar to when facing a challenging code, 
           I am also a Boxing Coach where I break down a complex move into modular steps, 
          and teach athletes to work incrementally and iteratively to master their craft. 
          */}
          
          {/* In my opinion, one of the most important principals in software development is maintaining clean, self-documenting code.  */}
        </motion.h1>
      </Flex>
      {/* <Milestones /> */}
      <Timeline />

      <FavoriteBooks />
      
    </section>
  );
}

export default AboutMe;
