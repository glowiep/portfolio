import { motion } from "framer-motion";
import { Text, Box, Flex, Avatar } from "@chakra-ui/react";
import { MotionBox } from "../Motion";
// import Milestones from "../Content/Milestones";
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
          <Text bg="white" bgClip="text" fontSize={{ base: "5xl", md:"6xl"}} fontWeight="extrabold">
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
              fontSize:"2em",
              textAlign: 'center',
              paddingTop: "2.25em",
            }}
            >
        <MotionBox whileHover={{ scale: 1.2 }} rounded="full" paddingBottom="2em">
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
              textAlign: 'center',
            }}
            >

      <MyUrls />
            </motion.div>
        
      </Flex>
    </section>
  );
}

export default AboutMe;
